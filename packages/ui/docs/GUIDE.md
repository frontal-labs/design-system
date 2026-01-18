# UI Components Usage Guide

Comprehensive guide for using `@frontal-labs/ui` components in your applications.

## Installation

```bash
bun install @frontal-labs/ui
```

## Quick Start

### Basic Setup

```tsx
// Import styles
import '@frontal-labs/ui/styles/styles.css';
// Or use consolidated styles
import '@frontal/design-system/styles/globals.css';

// Import components
import { Button, Card, Input } from '@frontal-labs/ui';
```

### First Component

```tsx
import { Button } from '@frontal-labs/ui';

export function MyComponent() {
  return <Button>Click me</Button>;
}
```

## Form Components

### Input Fields

```tsx
import { Input, Label } from '@frontal-labs/ui';

function FormExample() {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter email" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </div>
    </div>
  );
}
```

### Form with Validation

```tsx
import { Form, FormField, FormItem, FormLabel, FormControl, Input, Button } from '@frontal-labs/ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

function LoginForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

### Select Dropdown

```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@frontal-labs/ui';

function SelectExample() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  );
}
```

### Checkbox and Radio

```tsx
import { Checkbox, RadioGroup, Radio } from '@frontal-labs/ui';

function SelectionExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label htmlFor="terms">Accept terms</label>
      </div>
      
      <RadioGroup defaultValue="option1">
        <div className="flex items-center space-x-2">
          <Radio value="option1" id="r1" />
          <label htmlFor="r1">Option 1</label>
        </div>
        <div className="flex items-center space-x-2">
          <Radio value="option2" id="r2" />
          <label htmlFor="r2">Option 2</label>
        </div>
      </RadioGroup>
    </div>
  );
}
```

## Layout Components

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@frontal-labs/ui';

function CardExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description text</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}
```

### Grid Layout

```tsx
import { Grid, GridItem } from '@frontal-labs/ui';

function GridExample() {
  return (
    <Grid cols={3} gap={4}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
    </Grid>
  );
}
```

### Flex Layout

```tsx
import { Flex } from '@frontal-labs/ui';

function FlexExample() {
  return (
    <Flex direction="row" gap={4} align="center" justify="between">
      <div>Left</div>
      <div>Right</div>
    </Flex>
  );
}
```

## Navigation Components

### Sidebar

```tsx
import { 
  Sidebar, 
  SidebarProvider, 
  SidebarContent, 
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger
} from '@frontal-labs/ui';

function SidebarExample() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2>Navigation</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Dashboard</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Settings</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <main>
        <SidebarTrigger />
        Content here
      </main>
    </SidebarProvider>
  );
}
```

### Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@frontal-labs/ui';

function TabsExample() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
      <TabsContent value="tab3">Content 3</TabsContent>
    </Tabs>
  );
}
```

### Breadcrumb

```tsx
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from '@frontal-labs/ui';

function BreadcrumbExample() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbPage>Current Page</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
```

## Overlay Components

### Dialog

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, Button } from '@frontal-labs/ui';

function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>Dialog description text</DialogDescription>
        </DialogHeader>
        <div>Dialog content</div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

### Alert Dialog

```tsx
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction, Button } from '@frontal-labs/ui';

function AlertDialogExample() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
```

### Popover

```tsx
import { Popover, PopoverTrigger, PopoverContent, Button } from '@frontal-labs/ui';

function PopoverExample() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div>Popover content</div>
      </PopoverContent>
    </Popover>
  );
}
```

## Feedback Components

### Alert

```tsx
import { Alert, AlertTitle, AlertDescription } from '@frontal-labs/ui';

function AlertExample() {
  return (
    <Alert>
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>Alert description text</AlertDescription>
    </Alert>
  );
}
```

### Toast

```tsx
import { ToastProvider, toastManager, Button } from '@frontal-labs/ui';

function ToastExample() {
  return (
    <ToastProvider>
      <Button onClick={() => toastManager.toast({
        title: 'Success',
        description: 'Operation completed',
      })}>
        Show Toast
      </Button>
    </ToastProvider>
  );
}
```

### Progress

```tsx
import { Progress } from '@frontal-labs/ui';

function ProgressExample() {
  return (
    <div className="space-y-2">
      <Progress value={33} />
      <Progress value={66} />
      <Progress value={100} />
    </div>
  );
}
```

### Skeleton

```tsx
import { Skeleton } from '@frontal-labs/ui';

function SkeletonExample() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}
```

## Data Display

### Table

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@frontal-labs/ui';

function TableExample() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
```

### Avatar

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@frontal-labs/ui';

function AvatarExample() {
  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="/avatar.jpg" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
  );
}
```

### Badge

```tsx
import { Badge } from '@frontal-labs/ui';

function BadgeExample() {
  return (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}
```

## Advanced Patterns

### Composing Components

```tsx
import { Card, CardHeader, CardTitle, CardContent, Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@frontal-labs/ui';

function DashboardCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Action</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>User logged in</TableCell>
              <TableCell>2 minutes ago</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
```

### Custom Styling

```tsx
import { Button, cn } from '@frontal-labs/ui';

function CustomButton({ className, ...props }) {
  return (
    <Button 
      className={cn('custom-class', className)} 
      {...props}
    />
  );
}
```

### Controlled Components

```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, Button } from '@frontal-labs/ui';
import { useState } from 'react';

function ControlledDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Controlled Dialog</DialogTitle>
          </DialogHeader>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
```

## Best Practices

### 1. Use Semantic HTML

```tsx
// ✅ Good
<Button type="submit">Submit</Button>
<Input type="email" />

// ❌ Avoid
<div onClick={handleClick}>Submit</div>
```

### 2. Provide Accessible Labels

```tsx
// ✅ Good
<Label htmlFor="email">Email</Label>
<Input id="email" />

// ❌ Avoid
<Input placeholder="Email" />
```

### 3. Use Form Components Together

```tsx
// ✅ Good - Complete form structure
<Form>
  <FormField>
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input />
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
</Form>

// ❌ Avoid - Missing structure
<Input />
```

### 4. Compose Complex UIs

```tsx
// ✅ Good - Composed components
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// ❌ Avoid - Single monolithic component
<CardWithTitleAndContent title="Title" content="Content" />
```

### 5. Handle Loading States

```tsx
import { Button, Skeleton } from '@frontal-labs/ui';

function DataComponent({ isLoading, data }) {
  if (isLoading) {
    return <Skeleton className="h-20 w-full" />;
  }
  
  return <div>{data}</div>;
}
```

## TypeScript Support

All components are fully typed:

```tsx
import type { ButtonProps, CardProps } from '@frontal-labs/ui';

function MyComponent(props: ButtonProps) {
  // Fully typed props
  return <Button {...props} />;
}
```

## Accessibility

All components follow WCAG 2.1 AA standards:

- Keyboard navigation support
- ARIA attributes
- Focus management
- Screen reader support
- Proper semantic HTML

## Performance

- Components use React Server Components when possible
- Minimal JavaScript bundle size
- CSS-only animations where possible
- Optimized re-renders

