import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy p-6">
      <div className="bg-white rounded-2xl p-10 max-w-md text-center">
        <CheckCircle className="text-green-500 mx-auto mb-4" size={56} />
        <h1 className="font-display text-2xl text-navy mb-2">
          You're enrolled!
        </h1>
        <p className="text-gray-500 mb-6">
          Check your email for confirmation details and
          next steps. We'll see you in class.
        </p>
        <Link
          href="/"
          className="inline-block bg-navy text-white px-6 py-3 rounded-xl font-semibold hover:bg-navy-mid transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}