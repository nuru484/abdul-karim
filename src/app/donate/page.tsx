"use client";
import { motion } from "framer-motion";
import { Heart, CheckCircle, Smartphone } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

const donationTiers = [
  { amount: 25 },
  { amount: 100 },
  { amount: 500 },
  { amount: 1000 },
];

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<string>("100");
  const [customAmount, setCustomAmount] = useState("");

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Support the Campaign
            </span>
            <h1 className="heading-xl text-primary-foreground mb-6">
              Invest in Our <span className="text-accent">Shared Future</span>
            </h1>
            <p className="body-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Your contribution powers the movement for change. Every donation
              helps us reach more voters and build a better tomorrow for all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="px-4 py-12 md:py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Mobile Money Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-soft-xl h-full border-2 border-accent/20">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">
                    Mobile Money Donation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-muted/50 rounded-xl p-6 text-center">
                    <p className="text-sm text-muted-foreground mb-3">
                      Send donations via approved Money Transfer Apps
                    </p>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-foreground">
                        MTN Mobile Money
                      </p>
                      <p className="text-3xl font-bold text-accent">
                        0546488115
                      </p>
                      <p className="text-sm font-medium text-muted-foreground">
                        Abubakari Abdul-karim
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      Contribution Rules
                    </h4>
                    <ol className="space-y-3 text-sm text-foreground/80">
                      <li className="flex gap-3">
                        <span className="font-semibold shrink-0">1.</span>
                        <span>
                          I am a Ghanaian or lawfully admitted permanent
                          resident.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold shrink-0">2.</span>
                        <span>
                          This contribution is made from my own funds, and funds
                          are not being provided to me by another person or
                          entity for the purpose of making this contribution.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold shrink-0">3.</span>
                        <span>
                          I am making this contribution with my own personal
                          credit card and not with a corporate or business
                          credit card or a card issued to another person.
                        </span>
                      </li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Online Donation Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-soft-xl h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Online Donation Form
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-sm font-medium mb-3 block">
                      Select Amount (GHS)
                    </Label>
                    <RadioGroup
                      value={selectedAmount}
                      onValueChange={(value) => {
                        setSelectedAmount(value);
                        if (value !== "custom") setCustomAmount("");
                      }}
                      className="grid grid-cols-2 gap-3"
                    >
                      {donationTiers.map((tier) => (
                        <div key={tier.amount} className="flex items-center">
                          <RadioGroupItem
                            value={tier.amount.toString()}
                            id={`amount-${tier.amount}`}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={`amount-${tier.amount}`}
                            className="w-full px-4 py-3 text-center rounded-xl border border-border cursor-pointer transition-all peer-data-[state=checked]:bg-accent peer-data-[state=checked]:text-accent-foreground peer-data-[state=checked]:border-accent hover:border-accent/50 font-semibold"
                          >
                            ₵{tier.amount}
                          </Label>
                        </div>
                      ))}
                      <div className="flex items-center col-span-2">
                        <RadioGroupItem
                          value="custom"
                          id="amount-custom"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="amount-custom"
                          className="w-full px-4 py-3 text-center rounded-xl border border-border cursor-pointer transition-all peer-data-[state=checked]:bg-accent peer-data-[state=checked]:text-accent-foreground peer-data-[state=checked]:border-accent hover:border-accent/50 font-semibold"
                        >
                          Custom Amount
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {selectedAmount === "custom" && (
                    <div>
                      <Label htmlFor="custom-amount">Enter Amount</Label>
                      <div className="relative mt-2">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">
                          ₵
                        </span>
                        <Input
                          id="custom-amount"
                          type="number"
                          placeholder="Enter amount"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="pl-8"
                        />
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        id="first-name"
                        placeholder="John"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        id="last-name"
                        placeholder="Doe"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="mt-2"
                    />
                  </div>

                  <Button variant="accent" size="lg" className="w-full">
                    <Heart className="w-5 h-5 mr-2" />
                    Donate ₵
                    {selectedAmount === "custom"
                      ? customAmount || "0"
                      : selectedAmount}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    Your donation is secure and encrypted. By donating, you
                    agree to our terms and conditions and confirm you meet the
                    contribution requirements.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
