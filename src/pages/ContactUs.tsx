import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <div className="container mx-auto p-4 text-white">
      <div className="flex items-center mb-8 pt-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/">
            <ArrowLeft className="h-5 w-5 text-white" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-center flex-grow">Hubungi Kami</h1>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
        <p className="text-lg mb-4">
          Kami sedia membantu! Jika anda mempunyai sebarang pertanyaan, maklum balas, atau memerlukan bantuan, sila hubungi kami melalui kaedah di bawah:
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className="h-6 w-6 mr-3 text-primary" />
            <span className="text-lg">Email: info@nasyayacollection.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-6 w-6 mr-3 text-primary" />
            <span className="text-lg">Telefon: +60 12-345 6789</span>
          </div>
        </div>
        <p className="text-lg mt-6">
          Waktu Operasi: Isnin - Jumaat, 9:00 pagi - 5:00 petang (Waktu Malaysia)
        </p>
      </div>
    </div>
  );
};

export default ContactUs;