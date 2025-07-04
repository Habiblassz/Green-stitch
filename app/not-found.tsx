"use client";

import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function NotFoundPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<Image
				src="/images/logo.svg"
				width={300}
				height={300}
				alt="missing page image"
			/>
		</div>
	);
}

export default NotFoundPage;
