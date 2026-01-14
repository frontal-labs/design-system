export type DocsConfig = {
    nav: {
        title: string;
        items: {
            title: string;
            href: string;
            items?: {
                title: string;
                href: string;
            }[];
        }[];
    }[];
};

export const docsConfig: DocsConfig = {
    nav: [
        {
            title: "Getting Started",
            items: [
                { title: "Introduction", href: "/docs" },
                { title: "Installation", href: "/docs/installation" },
                { title: "Typography", href: "/docs/typography" },
                { title: "Colors", href: "/docs/colors" },
            ],
        },
        {
            title: "Layout",
            items: [
                { title: "Accordion", href: "/docs/components/accordion" },
                { title: "Aspect Ratio", href: "/docs/components/aspect-ratio" },
                { title: "Box", href: "/docs/components/box" },
                { title: "Card", href: "/docs/components/card" },
                { title: "Collapsible", href: "/docs/components/collapsible" },
                { title: "Container", href: "/docs/components/container" },
                { title: "Flex", href: "/docs/components/flex" },
                { title: "Grid", href: "/docs/components/grid" },
                { title: "Resizable", href: "/docs/components/resizable" },
                { title: "Scroll Area", href: "/docs/components/scroll-area" },
                { title: "Section", href: "/docs/components/section" },
                { title: "Separator", href: "/docs/components/separator" },
                { title: "Skeleton", href: "/docs/components/skeleton" },
                { title: "Stack", href: "/docs/components/stack" },
            ],
        },
        {
            title: "Forms",
            items: [
                { title: "Autocomplete", href: "/docs/components/autocomplete" },
                { title: "Button", href: "/docs/components/button" },
                { title: "Checkbox", href: "/docs/components/checkbox" },
                { title: "Combobox", href: "/docs/components/combobox" },
                { title: "Date Picker", href: "/docs/components/date-picker" },
                { title: "Date Range Picker", href: "/docs/components/date-range-picker" },
                { title: "Date Time Picker", href: "/docs/components/date-time-picker" },
                { title: "Field", href: "/docs/components/field" },
                { title: "Fieldset", href: "/docs/components/fieldset" },
                { title: "Form", href: "/docs/components/form" },
                { title: "Input", href: "/docs/components/input" },
                { title: "Input OTP", href: "/docs/components/input-otp" },
                { title: "Input Upload", href: "/docs/components/input-upload" },
                { title: "Label", href: "/docs/components/label" },
                { title: "Number Field", href: "/docs/components/number-field" },
                { title: "Radio", href: "/docs/components/radio" },
                { title: "Radio Group", href: "/docs/components/radio-group" },
                { title: "Select", href: "/docs/components/select" },
                { title: "Slider", href: "/docs/components/slider" },
                { title: "Switch", href: "/docs/components/switch" },
                { title: "Textarea", href: "/docs/components/textarea" },
                { title: "Time Picker", href: "/docs/components/time-picker" },
            ],
        },
        {
            title: "Navigation",
            items: [
                { title: "Breadcrumb", href: "/docs/components/breadcrumb" },
                { title: "Dropdown Menu", href: "/docs/components/dropdown-menu" },
                { title: "Link", href: "/docs/components/link" },
                { title: "Menu", href: "/docs/components/menu" },
                { title: "Pagination", href: "/docs/components/pagination" },
                { title: "Sidebar", href: "/docs/components/sidebar" },
                { title: "Tabs", href: "/docs/components/tabs" },
                { title: "Toolbar", href: "/docs/components/toolbar" },
            ],
        },
        {
            title: "Overlays",
            items: [
                { title: "Alert Dialog", href: "/docs/components/alert-dialog" },
                { title: "Command Menu", href: "/docs/components/command-menu" },
                { title: "Dialog", href: "/docs/components/dialog" },
                { title: "Drawer", href: "/docs/components/drawer" },
                { title: "Hover Card", href: "/docs/components/hover-card" },
                { title: "Popover", href: "/docs/components/popover" },
                { title: "Sheet", href: "/docs/components/sheet" },
                { title: "Tooltip", href: "/docs/components/tooltip" },
            ],
        },
        {
            title: "Feedback",
            items: [
                { title: "Alert", href: "/docs/components/alert" },
                { title: "Banner", href: "/docs/components/banner" },
                { title: "Note", href: "/docs/components/note" },
                { title: "Progress", href: "/docs/components/progress" },
                { title: "Sonner", href: "/docs/components/sonner" },
                { title: "Spinner", href: "/docs/components/spinner" },
                { title: "Toast", href: "/docs/components/toast" },
            ],
        },
        {
            title: "Data Display",
            items: [
                { title: "Avatar", href: "/docs/components/avatar" },
                { title: "Badge", href: "/docs/components/badge" },
                { title: "Blockquote", href: "/docs/components/blockquote" },
                { title: "Calendar", href: "/docs/components/calendar" },
                { title: "Chart", href: "/docs/components/chart" },
                { title: "Code Block", href: "/docs/components/code-block" },
                { title: "Empty", href: "/docs/components/empty" },
                { title: "Heading", href: "/docs/components/heading" },
                { title: "Image", href: "/docs/components/image" },
                { title: "Image Cropper", href: "/docs/components/image-cropper" },
                { title: "Inline Code", href: "/docs/components/inline-code" },
                { title: "Item", href: "/docs/components/item" },
                { title: "Kbd", href: "/docs/components/kbd" },
                { title: "List", href: "/docs/components/list" },
                { title: "Meter", href: "/docs/components/meter" },
                { title: "Preview Card", href: "/docs/components/preview-card" },
                { title: "Table", href: "/docs/components/table" },
                { title: "Text", href: "/docs/components/text" },
            ],
        },
        {
            title: "Interactive",
            items: [
                { title: "Split Button", href: "/docs/components/split-button" },
                { title: "Toggle", href: "/docs/components/toggle" },
                { title: "Toggle Group", href: "/docs/components/toggle-group" },
                { title: "Steps", href: "/docs/components/steps" },
                { title: "Video", href: "/docs/components/video" },
            ],
        },
    ],
};
