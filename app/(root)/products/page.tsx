"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

export default function ProductsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    organization: "",
    pincode: "",
    message: "",
    reference: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Quote request sent successfully!");
        setForm({
          name: "",
          email: "",
          contact: "",
          message: "",
          pincode: "",
          organization: "",
          reference: "",
        });
      } else {
        toast.error("Failed to send quote request.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen w-full">
      <div className="w-full h-[60vh] relative">
        <Image
          src="/images/jmdc-products.png"
          alt="JMDC Product Showcase"
          fill
          className="object-contain"
          priority
        />
      </div>

      <section className="px-6 py-16 bg-gray-50 text-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            Get a Quote
          </h2>
          <p className="mb-8 text-gray-600">
            Interested in our products? Fill in your details and our team will
            reach out to you shortly.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              name="contact"
              type="text"
              placeholder="Contact Number"
              value={form.contact}
              onChange={handleChange}
              required
            />
            <Input
              name="organization"
              type="text"
              placeholder="Organization Name"
              value={form.organization}
              onChange={handleChange}
            />
            <Input
              name="pincode"
              type="text"
              placeholder="PIN Code"
              value={form.pincode}
              onChange={handleChange}
            />
            <Input
              name="reference"
              type="text"
              placeholder="Sales Manager Reference (if any)"
              value={form.reference}
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Interested Product Area / Message"
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm"
              required
            />
            <Button
              type="submit"
              className="w-full bg-orange-600 text-white hover:bg-orange-700"
            >
              Submit Quote Request
            </Button>
          </form>
        </div>
      </section>

      <section className="px-6 py-12 bg-white text-center">
        <h2 className="text-2xl font-semibold text-orange-600 mb-6">
          Downloads
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link
            href="/api/download-datasheet"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600"
          >
            <Download className="w-5 h-5" /> Datasheets
          </Link>

          <Link
            href="/api/download-bis"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700"
          >
            <Download className="w-5 h-5" /> BIS Certificate
          </Link>

          <Link
            href="/api/download-pricelist"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700"
          >
            <Download className="w-5 h-5" /> Price List
          </Link>
        </div>
      </section>
    </main>
  );
}
