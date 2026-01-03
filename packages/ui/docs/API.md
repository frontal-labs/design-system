# UI Components API Reference

Complete API documentation for `@frontal/ui` components.

## Component Index

### Form Components

#### Input
- `Input` - Text input field
- `Textarea` - Multi-line text input
- `InputGroup` - Input with addons
- `InputOTP` - One-time password input
- `InputUpload` - File upload input
- `InputKeyboard` - Keyboard shortcut display

#### Selection
- `Select` - Dropdown select
- `Checkbox` - Checkbox input
- `CheckboxGroup` - Group of checkboxes
- `Radio` - Radio button
- `RadioGroup` - Group of radio buttons
- `Switch` - Toggle switch
- `Autocomplete` - Autocomplete input
- `Combobox` - Combobox with search

#### Date & Time
- `DatePicker` - Date picker
- `DateRangePicker` - Date range picker
- `DateTimePicker` - Date and time picker
- `TimePicker` - Time picker
- `Calendar` - Calendar component

#### Form Structure
- `Form` - Form wrapper with validation
- `FormField` - Form field wrapper
- `FormItem` - Form item container
- `FormLabel` - Form label
- `FormDescription` - Form description
- `FormMessage` - Form error/success message
- `Field` - Field component
- `Fieldset` - Fieldset grouping
- `Label` - Label component

### Layout Components

#### Container
- `Card` - Card container
- `Frame` - Frame container
- `Container` - Responsive container
- `Box` - Flexible box
- `Section` - Section container

#### Grid & Flex
- `Grid` - CSS Grid layout
- `GridItem` - Grid item
- `Flex` - Flexbox layout
- `Stack` - Vertical stack
- `Group` - Horizontal group

#### Other Layout
- `Separator` - Visual separator
- `AspectRatio` - Maintain aspect ratio
- `Resizable` - Resizable panels
- `ScrollArea` - Custom scroll area

### Navigation Components

- `Sidebar` - Sidebar navigation
- `Breadcrumb` - Breadcrumb navigation
- `Tabs` - Tab navigation
- `Menu` - Menu component
- `DropdownMenu` - Dropdown menu
- `Pagination` - Pagination controls
- `CommandMenu` - Command palette

### Data Display Components

- `Table` - Data table
- `List` - List component
- `ListItem` - List item
- `Item` - Generic item
- `Avatar` - User avatar
- `Badge` - Badge component
- `CodeBlock` - Code block display
- `InlineCode` - Inline code
- `Snippet` - Code snippet
- `Empty` - Empty state

### Feedback Components

#### Alerts & Notifications
- `Alert` - Alert message
- `Banner` - Banner notification
- `Note` - Note component
- `Toast` - Toast notification
- `Tooltip` - Tooltip

#### Progress Indicators
- `Progress` - Progress bar
- `Meter` - Meter component
- `Skeleton` - Loading skeleton
- `Spinner` - Loading spinner

### Overlay Components

- `Dialog` - Modal dialog
- `AlertDialog` - Alert dialog
- `Drawer` - Drawer/sheet
- `Sheet` - Sheet component
- `Popover` - Popover
- `HoverCard` - Hover card
- `PreviewCard` - Preview card

### Interactive Components

- `Button` - Button component
- `ButtonGroup` - Group of buttons
- `SplitButton` - Split button
- `Toggle` - Toggle button
- `ToggleGroup` - Group of toggles
- `Toolbar` - Toolbar component
- `Slider` - Slider input
- `NumberField` - Number input

### Other Components

- `Accordion` - Collapsible accordion
- `Collapsible` - Collapsible content
- `Heading` - Heading component
- `Text` - Text component
- `Link` - Link component
- `Image` - Image component
- `ImageCropper` - Image cropper
- `Video` - Video component
- `Blockquote` - Blockquote
- `Steps` - Step indicator
- `Kbd` - Keyboard shortcut display

## Component APIs

### Button

```typescript
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'destructive' | 'destructive-outline' | 'ghost' | 'link' | 'outline' | 'secondary';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'icon' | 'icon-small' | 'icon-large' | 'icon-xlarge' | 'icon-xsmall';
  shape?: 'pill' | 'square';
  asChild?: boolean;
}
```

**Variants:**
- `primary` - Primary button style
- `destructive` - Destructive action style
- `destructive-outline` - Outlined destructive style
- `ghost` - Ghost/transparent style
- `link` - Link style button
- `outline` - Outlined style
- `secondary` - Secondary style

**Sizes:**
- `xsmall` - Extra small button
- `small` - Small button
- `medium` - Medium button (default)
- `large` - Large button
- `xlarge` - Extra large button
- `icon` - Icon-only button
- `icon-small` - Small icon button
- `icon-large` - Large icon button
- `icon-xlarge` - Extra large icon button
- `icon-xsmall` - Extra small icon button

**Example:**
```tsx
<Button variant="primary" size="large">Click me</Button>
<Button variant="outline" size="small">Cancel</Button>
<Button variant="ghost" size="icon"><Icon /></Button>
```

### Card

```typescript
interface CardProps extends ComponentProps<'div'> {}
interface CardHeaderProps extends ComponentProps<'div'> {}
interface CardTitleProps extends ComponentProps<'div'> {}
interface CardDescriptionProps extends ComponentProps<'div'> {}
interface CardContentProps extends ComponentProps<'div'> {}
interface CardFooterProps extends ComponentProps<'div'> {}
interface CardActionProps extends ComponentProps<'div'> {}
```

**Example:**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Input

```typescript
interface InputProps extends ComponentProps<'input'> {}
```

**Example:**
```tsx
<Input type="text" placeholder="Enter text" />
<Input type="email" />
<Input type="password" />
```

### Select

```typescript
interface SelectProps {}
interface SelectTriggerProps extends ComponentProps<'button'> {}
interface SelectValueProps {}
interface SelectContentProps {}
interface SelectItemProps extends ComponentProps<'div'> {}
interface SelectGroupProps {}
interface SelectGroupLabelProps {}
interface SelectSeparatorProps {}
```

**Example:**
```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectGroupLabel>Group 1</SelectGroupLabel>
      <SelectItem value="1">Option 1</SelectItem>
      <SelectItem value="2">Option 2</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectItem value="3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

### Dialog

```typescript
interface DialogProps {}
interface DialogTriggerProps extends ComponentProps<'button'> {}
interface DialogContentProps extends ComponentProps<'div'> {}
interface DialogHeaderProps extends ComponentProps<'div'> {}
interface DialogTitleProps extends ComponentProps<'h2'> {}
interface DialogDescriptionProps extends ComponentProps<'p'> {}
interface DialogFooterProps extends ComponentProps<'div'> {}
interface DialogCloseProps extends ComponentProps<'button'> {}
```

**Example:**
```tsx
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    Content here
    <DialogFooter>
      <Button>Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Form

```typescript
interface FormProps extends ComponentProps<'form'> {}
interface FormFieldProps {
  control: Control<any>;
  name: string;
  render: (props: { field: ControllerRenderProps }) => ReactNode;
}
interface FormItemProps extends ComponentProps<'div'> {}
interface FormLabelProps extends ComponentProps<'label'> {}
interface FormDescriptionProps extends ComponentProps<'p'> {}
interface FormMessageProps extends ComponentProps<'p'> {}
```

**Example:**
```tsx
<Form {...form}>
  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input {...field} />
        </FormControl>
        <FormDescription>Enter your email</FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
</Form>
```

### Sidebar

```typescript
interface SidebarProps extends ComponentProps<'aside'> {}
interface SidebarProviderProps {}
interface SidebarContentProps extends ComponentProps<'div'> {}
interface SidebarHeaderProps extends ComponentProps<'div'> {}
interface SidebarFooterProps extends ComponentProps<'div'> {}
interface SidebarGroupProps {}
interface SidebarGroupLabelProps {}
interface SidebarGroupContentProps {}
interface SidebarMenuProps {}
interface SidebarMenuItemProps {}
interface SidebarMenuButtonProps {}
interface SidebarTriggerProps extends ComponentProps<'button'> {}
```

**Example:**
```tsx
<SidebarProvider>
  <Sidebar>
    <SidebarHeader>Header</SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>Item 1</SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>Footer</SidebarFooter>
  </Sidebar>
</SidebarProvider>
```

## Hooks

### `useSidebar()`

Hook for accessing sidebar state and controls.

**Returns:**
```typescript
{
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}
```

**Example:**
```tsx
const { isOpen, toggle } = useSidebar();
```

### `useFormContext()`

Hook for accessing form context (from react-hook-form).

**Returns:** Form context object

**Example:**
```tsx
const form = useFormContext();
```

### `useIsMobile()`

Hook for detecting mobile viewport.

**Returns:** `boolean`

**Example:**
```tsx
const isMobile = useIsMobile();
```

## Utilities

### `cn(...classes)`

Class name utility function (combines clsx and tailwind-merge).

**Parameters:**
- `...classes` - Class names (strings, objects, arrays)

**Returns:** `string` - Merged class names

**Example:**
```tsx
cn('base-class', condition && 'conditional-class', { 'object-class': true })
```

### Variant Functions

#### `buttonVariants(options)`

Generate button variant classes.

**Parameters:**
```typescript
{
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
}
```

**Returns:** `string` - Class names

**Example:**
```tsx
const className = buttonVariants({ variant: 'primary', size: 'large' });
```

#### `badgeVariants(options)`

Generate badge variant classes.

**Parameters:**
```typescript
{
  variant?: BadgeVariant;
}
```

**Returns:** `string` - Class names

## Type Exports

All component prop types are exported:

```typescript
export type {
  ButtonProps,
  CardProps,
  InputProps,
  SelectProps,
  DialogProps,
  FormProps,
  // ... and all other component props
};
```

## Component Variants

Many components support variants via `class-variance-authority`:

- `buttonVariants` - Button style variants
- `badgeVariants` - Badge style variants
- `boxVariants` - Box style variants
- `codeBlockVariants` - Code block variants
- `containerVariants` - Container variants
- `flexVariants` - Flex variants
- `gridVariants` - Grid variants
- `groupVariants` - Group variants
- `noteVariants` - Note variants
- `sectionVariants` - Section variants
- `snippetVariants` - Snippet variants
- `stackVariants` - Stack variants
- `toggleVariants` - Toggle variants

