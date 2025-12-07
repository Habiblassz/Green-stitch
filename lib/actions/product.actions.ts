"use server";

// import { PrismaClient } from "@prisma/client";
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// get latest products

export async function getLatestProducts() {
	// const prisma = new PrismaClient();

	// Fetch the latest products from the database
	const data = await prisma.product.findMany({
		take: LATEST_PRODUCTS_LIMIT,
		orderBy: { createdAt: "desc" },
	});

	return convertToPlainObject(data);
}

//get single product by its slug

export async function getProductBySlug(slug: string) {
	return await prisma.product.findFirst({
		where: { slug: slug },
	});
}
