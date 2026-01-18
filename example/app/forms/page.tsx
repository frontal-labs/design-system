"use client";

import {
	Alert,
	Button,
	Card,
	CardHeader,
	CardPanel,
	CardTitle,
	Checkbox,
	Field,
	FieldControl,
	FieldDescription,
	FieldError,
	FieldLabel,
	Form,
	FormField,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	Spinner,
	Textarea,
} from "@frontal-labs/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const contactFormSchema = z.object({
	firstName: z.string().min(2, "First name must be at least 2 characters"),
	lastName: z.string().min(2, "Last name must be at least 2 characters"),
	email: z.string().email("Please enter a valid email address"),
	phone: z.string().optional(),
	company: z.string().optional(),
	message: z.string().min(10, "Message must be at least 10 characters"),
	newsletter: z.boolean().default(false),
	contactMethod: z.enum(["email", "phone", "both"]),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const userRegistrationSchema = z
	.object({
		username: z
			.string()
			.min(3, "Username must be at least 3 characters")
			.max(20, "Username must be less than 20 characters")
			.regex(
				/^[a-zA-Z0-9_]+$/,
				"Username can only contain letters, numbers, and underscores",
			),
		email: z.string().email("Please enter a valid email address"),
		password: z
			.string()
			.min(8, "Password must be at least 8 characters")
			.regex(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
				"Password must contain at least one uppercase letter, one lowercase letter, and one number",
			),
		confirmPassword: z.string(),
		terms: z
			.boolean()
			.refine(
				(val) => val === true,
				"You must accept the terms and conditions",
			),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	});

type UserRegistrationValues = z.infer<typeof userRegistrationSchema>;

export default function FormsPage() {
	const [isSubmittingContact, setIsSubmittingContact] = useState(false);
	const [isSubmittingRegistration, setIsSubmittingRegistration] =
		useState(false);
	const [contactSubmitted, setContactSubmitted] = useState(false);
	const [registrationSubmitted, setRegistrationSubmitted] = useState(false);

	const contactForm = useForm<ContactFormValues>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			company: "",
			message: "",
			newsletter: false,
			contactMethod: "email",
		},
	});

	const registrationForm = useForm<UserRegistrationValues>({
		resolver: zodResolver(userRegistrationSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
			terms: false,
		},
	});

	const onContactSubmit = async (data: ContactFormValues) => {
		setIsSubmittingContact(true);
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 2000));
		console.log("Contact form submitted:", data);
		setIsSubmittingContact(false);
		setContactSubmitted(true);
	};

	const onRegistrationSubmit = async (data: UserRegistrationValues) => {
		setIsSubmittingRegistration(true);
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 2000));
		console.log("Registration form submitted:", data);
		setIsSubmittingRegistration(false);
		setRegistrationSubmitted(true);
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="mb-8">
				<h1 className="text-3xl font-bold mb-4">Form Examples</h1>
				<p className="text-muted-foreground">
					Complete form examples with validation and error handling.
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Contact Form */}
				<Card>
					<CardHeader>
						<CardTitle>Contact Form</CardTitle>
					</CardHeader>
					<CardPanel>
						{contactSubmitted ? (
							<Alert>
								Thank you for your message! We'll get back to you soon.
							</Alert>
						) : (
							<Form {...contactForm}>
								<form
									onSubmit={contactForm.handleSubmit(onContactSubmit)}
									className="space-y-4"
								>
									<div className="grid grid-cols-2 gap-4">
										<FormField
											control={contactForm.control}
											name="firstName"
											render={({ field }) => (
												<Field>
													<FieldLabel>First Name</FieldLabel>
													<FieldControl>
														<Input {...field} />
													</FieldControl>
													<FieldError />
												</Field>
											)}
										/>
										<FormField
											control={contactForm.control}
											name="lastName"
											render={({ field }) => (
												<Field>
													<FieldLabel>Last Name</FieldLabel>
													<FieldControl>
														<Input {...field} />
													</FieldControl>
													<FieldError />
												</Field>
											)}
										/>
									</div>

									<FormField
										control={contactForm.control}
										name="email"
										render={({ field }) => (
											<Field>
												<FieldLabel>Email</FieldLabel>
												<FieldControl>
													<Input type="email" {...field} />
												</FieldControl>
												<FieldError />
											</Field>
										)}
									/>

									<FormField
										control={contactForm.control}
										name="phone"
										render={({ field }) => (
											<Field>
												<FieldLabel>Phone (Optional)</FieldLabel>
												<FieldControl>
													<Input type="tel" {...field} />
												</FieldControl>
												<FieldError />
											</Field>
										)}
									/>

									<FormField
										control={contactForm.control}
										name="company"
										render={({ field }) => (
											<Field>
												<FieldLabel>Company (Optional)</FieldLabel>
												<FieldControl>
													<Input {...field} />
												</FieldControl>
												<FieldError />
											</Field>
										)}
									/>

									<FormField
										control={contactForm.control}
										name="message"
										render={({ field }) => (
											<Field>
												<FieldLabel>Message</FieldLabel>
												<FieldControl>
													<Textarea rows={4} {...field} />
												</FieldControl>
												<FieldError />
											</Field>
										)}
									/>

									<FormField
										control={contactForm.control}
										name="contactMethod"
										render={({ field }) => (
											<Field>
												<FieldLabel>Preferred Contact Method</FieldLabel>
												<FieldControl>
													<Select
														value={field.value}
														onValueChange={field.onChange}
													>
														<SelectTrigger>
															<span>
																{field.value === "email"
																	? "Email"
																	: field.value === "phone"
																		? "Phone"
																		: "Both"}
															</span>
														</SelectTrigger>
														<SelectContent>
															<SelectItem value="email">Email</SelectItem>
															<SelectItem value="phone">Phone</SelectItem>
															<SelectItem value="both">Both</SelectItem>
														</SelectContent>
													</Select>
												</FieldControl>
												<FieldError />
											</Field>
										)}
									/>

									<FormField
										control={contactForm.control}
										name="newsletter"
										render={({ field }) => (
											<Field className="flex flex-row items-start space-x-3 space-y-0">
												<FieldControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FieldControl>
												<div className="space-y-1 leading-none">
													<FieldLabel>Subscribe to newsletter</FieldLabel>
													<FieldDescription>
														Receive updates about our products and services.
													</FieldDescription>
												</div>
												<FieldError />
											</Field>
										)}
									/>

									<Button
										type="submit"
										disabled={isSubmittingContact}
										className="w-full"
									>
										{isSubmittingContact ? (
											<Spinner className="mr-2 h-4 w-4" />
										) : null}
										Send Message
									</Button>
								</form>
							</Form>
						)}
					</CardPanel>
				</Card>

				{/* User Registration Form */}
				<Card>
					<CardHeader>
						<CardTitle>User Registration</CardTitle>
					</CardHeader>
					<CardPanel>
						{registrationSubmitted ? (
							<Alert>Registration successful! Welcome aboard.</Alert>
						) : (
							<Form {...registrationForm}>
								<form
									onSubmit={registrationForm.handleSubmit(onRegistrationSubmit)}
									className="space-y-4"
								>
									<FormField
										control={registrationForm.control}
										name="username"
										render={({ field }) => (
											<Field>
												<FieldLabel>Username</FieldLabel>
												<FieldControl>
													<Input {...field} />
												</FieldControl>
												<FieldDescription>
													This will be your public username.
												</FieldDescription>
												<FieldError />
											</Field>
										)}
									/>

									<FormField
										control={registrationForm.control}
										name="email"
										render={({ field }) => (
											<Field>
												<FieldLabel>Email</FieldLabel>
												<FieldControl>
													<Input type="email" {...field} />
												</FieldControl>
												<FieldError />
											</Field>
										)}
									/>

									<FormField
										control={registrationForm.control}
										name="password"
										render={({ field }) => (
											<Field>
												<FieldLabel>Password</FieldLabel>
												<FieldControl>
													<Input type="password" {...field} />
												</FieldControl>
												<FieldDescription>
													Must be at least 8 characters with uppercase,
													lowercase, and numbers.
												</FieldDescription>
												<FieldError />
											</Field>
										)}
									/>

									<FormField
										control={registrationForm.control}
										name="confirmPassword"
										render={({ field }) => (
											<Field>
												<FieldLabel>Confirm Password</FieldLabel>
												<FieldControl>
													<Input type="password" {...field} />
												</FieldControl>
												<FieldError />
											</Field>
										)}
									/>

									<FormField
										control={registrationForm.control}
										name="terms"
										render={({ field }) => (
											<Field className="flex flex-row items-start space-x-3 space-y-0">
												<FieldControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FieldControl>
												<div className="space-y-1 leading-none">
													<FieldLabel>Accept terms and conditions</FieldLabel>
													<FieldDescription>
														I agree to the Terms of Service and Privacy Policy.
													</FieldDescription>
												</div>
												<FieldError />
											</Field>
										)}
									/>

									<Button
										type="submit"
										disabled={isSubmittingRegistration}
										className="w-full"
									>
										{isSubmittingRegistration ? (
											<Spinner className="mr-2 h-4 w-4" />
										) : null}
										Create Account
									</Button>
								</form>
							</Form>
						)}
					</CardPanel>
				</Card>
			</div>
		</div>
	);
}
