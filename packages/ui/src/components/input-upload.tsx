"use client";

import { CloseIcon, UploadIcon } from "@frontal-labs/icons";
import { cva, type VariantProps } from "class-variance-authority";
import {
  type ChangeEvent,
  type ComponentProps,
  type DragEvent,
  useRef,
  useState,
} from "react";
import { cn } from "../utils";
import { Button } from "./button";
import { Progress, ProgressIndicator, ProgressTrack } from "./progress";

const inputUploadVariants = cva(
  "relative flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed transition-colors",
  {
    defaultVariants: {
      variant: "default",
      state: "idle",
    },
    variants: {
      variant: {
        default: "border-input bg-background",
        error: "border-destructive/64 bg-destructive/4",
      },
      state: {
        idle: "",
        dragging: "border-primary bg-primary/4",
        uploading: "border-primary/64",
        error: "border-destructive/64 bg-destructive/4",
      },
    },
  }
);

type InputUploadProps = ComponentProps<"button"> &
  VariantProps<typeof inputUploadVariants> & {
    accept?: string;
    multiple?: boolean;
    maxSize?: number; // in bytes
    onFileSelect?: (files: File[]) => void;
    onUpload?: (files: File[]) => Promise<void>;
    onError?: (error: string) => void;
    value?: File[];
    disabled?: boolean;
    showProgress?: boolean;
    uploadProgress?: number; // 0-100
  };

function InputUpload({
  className,
  variant,
  accept,
  multiple = false,
  maxSize,
  onFileSelect,
  onUpload,
  onError,
  value = [],
  disabled = false,
  showProgress = false,
  uploadProgress = 0,
  ...props
}: InputUploadProps) {
  const [state, setState] = useState<
    "idle" | "dragging" | "uploading" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>(value);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    if (maxSize && file.size > maxSize) {
      return `File "${file.name}" exceeds maximum size of ${formatFileSize(maxSize)}`;
    }
    return null;
  };

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) {
      return;
    }

    const newFiles = Array.from(fileList);
    const validFiles: File[] = [];
    const errors: string[] = [];

    for (const file of newFiles) {
      const validationError = validateFile(file);
      if (validationError) {
        errors.push(validationError);
      } else {
        validFiles.push(file);
      }
    }

    if (errors.length > 0) {
      setError(errors.join(", "));
      setState("error");
      onError?.(errors.join(", "));
    } else {
      const updatedFiles = multiple ? [...files, ...validFiles] : validFiles;
      setFiles(updatedFiles);
      setError(null);
      setState("idle");
      onFileSelect?.(updatedFiles);

      if (onUpload) {
        setState("uploading");
        onUpload(updatedFiles)
          .then(() => {
            setState("idle");
          })
          .catch((err) => {
            setState("error");
            setError(err.message || "Upload failed");
            onError?.(err.message || "Upload failed");
          });
      }
    }
  };

  const handleDragOver = (e: DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      setState("dragging");
    }
  };

  const handleDragLeave = (e: DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setState("idle");
  };

  const handleDrop = (e: DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setState("idle");
    if (!disabled) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const handleClick = () => {
    if (!disabled) {
      fileInputRef.current?.click();
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFileSelect?.(updatedFiles);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${Math.round((bytes / k ** i) * 100) / 100} ${sizes[i]}`;
  };

  const currentVariant =
    error || state === "error" ? "error" : variant || "default";

  return (
    <div
      className="flex w-full flex-col gap-2"
      data-slot="input-upload-container"
    >
      <button
        type="button"
        disabled={disabled}
        className={cn(
          inputUploadVariants({ variant: currentVariant, state }),
          disabled && "cursor-not-allowed opacity-64",
          !disabled && "cursor-pointer",
          className
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        data-slot="input-upload"
        {...props}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileInputChange}
          className="hidden"
          disabled={disabled}
          data-slot="input-upload-input"
        />
        <UploadIcon className="size-8 text-muted-foreground" />
        <div className="text-center">
          <span className="font-medium text-sm">
            Click to upload or drag and drop
          </span>
          {accept && (
            <p className="mt-1 text-muted-foreground text-xs">
              Accepted: {accept}
            </p>
          )}
          {maxSize && (
            <p className="mt-1 text-muted-foreground text-xs">
              Max size: {formatFileSize(maxSize)}
            </p>
          )}
        </div>
      </button>

      {showProgress && state === "uploading" && (
        <div className="w-full" data-slot="input-upload-progress">
          <Progress value={uploadProgress}>
            <ProgressTrack>
              <ProgressIndicator />
            </ProgressTrack>
          </Progress>
        </div>
      )}

      {error && (
        <div
          className="text-destructive text-sm"
          data-slot="input-upload-error"
          role="alert"
        >
          {error}
        </div>
      )}

      {files.length > 0 && (
        <div className="flex flex-col gap-2" data-slot="input-upload-files">
          {files.map((file, index) => (
            <div
              key={`${file.name}-${file.size}-${index}`}
              className="flex items-center justify-between gap-2 rounded-md border bg-background px-3 py-2"
              data-slot="input-upload-file"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-sm">{file.name}</p>
                <p className="text-muted-foreground text-xs">
                  {formatFileSize(file.size)}
                </p>
              </div>
              {!disabled && (
                <Button
                  variant="ghost"
                  size="icon-xsmall"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveFile(index);
                  }}
                  aria-label={`Remove ${file.name}`}
                >
                  <CloseIcon className="size-3.5" />
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export { InputUpload, type InputUploadProps };
