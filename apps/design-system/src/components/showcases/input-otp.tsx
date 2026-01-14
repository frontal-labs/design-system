"use client";

import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@frontal/design-system";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

export function InputOTPShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
					<InputOTPGroup>
						<InputOTPSlot index={0} />
						<InputOTPSlot index={1} />
						<InputOTPSlot index={2} />
						<InputOTPSlot index={3} />
						<InputOTPSlot index={4} />
						<InputOTPSlot index={5} />
					</InputOTPGroup>
				</InputOTP>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Separated Group</h3>
				<InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
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
			</section>
		</div>
	);
}
