import { cn } from "@frontal/shared";
import {
	Button,
	Field,
	FieldDescription,
	FieldLabel,
	Fieldset,
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@frontal/ui";

export function OTPForm({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<form>
				<Fieldset>
					<div className="flex flex-col items-center gap-1 text-center">
						<h1 className="font-bold text-2xl">Enter verification code</h1>
						<p className="text-balance text-muted-foreground text-sm">
							We sent a 6-digit code to your email.
						</p>
					</div>
					<Field>
						<FieldLabel htmlFor="otp" className="sr-only">
							Verification code
						</FieldLabel>
						<InputOTP maxLength={6} id="otp" required>
							<InputOTPGroup className="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
								<InputOTPSlot index={0} />
								<InputOTPSlot index={1} />
							</InputOTPGroup>
							<InputOTPSeparator />
							<InputOTPGroup className="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
								<InputOTPSlot index={2} />
								<InputOTPSlot index={3} />
							</InputOTPGroup>
							<InputOTPSeparator />
							<InputOTPGroup className="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
								<InputOTPSlot index={4} />
								<InputOTPSlot index={5} />
							</InputOTPGroup>
						</InputOTP>
						<FieldDescription className="text-center">
							Enter the 6-digit code sent to your email.
						</FieldDescription>
					</Field>
					<Button type="submit">Verify</Button>
					<FieldDescription className="text-center">
						Didn&apos;t receive the code? <a href="/sign-in">Resend</a>
					</FieldDescription>
				</Fieldset>
			</form>
		</div>
	);
}
