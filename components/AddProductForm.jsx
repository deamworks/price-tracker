"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { Input } from "./ui/input";

const AddProductForm = ({ user }) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {}
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
        <div className="rounded-lg flex flex-col sm:flex-row gap-2">
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste product URL (Shopee, TikTok, Amazon, etc.)"
            className="bg-white h-12 text-base"
            required
            disabled={loading}
          />

          <Button
            type="submit"
            disabled={loading}
            className="bg-black hover:bg-[#414b9e] sm:h-12 px-8"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Adding...
              </>
            ) : (
              "Track Price"
            )}
          </Button>
        </div>
      </form>

      {/* auth modal */}
    </>
  );
};

export default AddProductForm;
