import {
	Button,
	Card,
	CardContent,
	cn,
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
		<div
			className={cn("flex flex-col gap-6 md:min-h-[450px]", className)}
			{...props}
		>
			<Card className="flex-1 overflow-hidden p-0">
				<CardContent className="grid flex-1 p-0 md:grid-cols-2">
					<form className="flex flex-col items-center justify-center p-6 md:p-8">
						<Fieldset>
							<Field className="items-center text-center">
								<h1 className="font-bold text-2xl">Enter verification code</h1>
								<p className="text-balance text-muted-foreground text-sm">
									We sent a 6-digit code to your email
								</p>
							</Field>
							<Field>
								<FieldLabel htmlFor="otp" className="sr-only">
									Verification code
								</FieldLabel>
								<InputOTP
									maxLength={6}
									id="otp"
									required
									containerClassName="gap-4"
								>
									<InputOTPGroup>
										<InputOTPSlot index={0} />
										<InputOTPSlot index={1} />
										<InputOTPSlot index={2} />
									</InputOTPGroup>
									<InputOTPSeparator />
									<InputOTPGroup>
										<InputOTPSlot index={3} />
										<InputOTPSlot index={4} />
										<InputOTPSlot index={5} />
									</InputOTPGroup>
								</InputOTP>
								<FieldDescription className="text-center">
									Enter the 6-digit code sent to your email.
								</FieldDescription>
							</Field>
							<Field>
								<Button type="submit">Verify</Button>
								<FieldDescription className="text-center">
									Didn&apos;t receive the code?{" "}
									<a href="/resend-code">Resend</a>
								</FieldDescription>
							</Field>
						</Fieldset>
					</form>
					<div className="relative hidden bg-muted md:block">
						<img
							src="/placeholder.svg"
							alt=""
							className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
						/>
					</div>
				</CardContent>
			</Card>
			<FieldDescription className="text-center">
				By clicking continue, you agree to our{" "}
				<a href="/terms">Terms of Service</a> and{" "}
				<a href="/privacy">Privacy Policy</a>.
			</FieldDescription>
		</div>
	);
}
