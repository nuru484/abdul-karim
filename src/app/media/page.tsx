"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Play } from "lucide-react";

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600",
    alt: "Campaign rally",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=600",
    alt: "Community meeting",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600",
    alt: "Town hall",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600",
    alt: "Press conference",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600",
    alt: "Team meeting",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600",
    alt: "Volunteer event",
  },
];

const videos = [
  {
    id: 1,
    thumbnail:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600",
    title: "Campaign Launch",
  },
  {
    id: 2,
    thumbnail:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600",
    title: "Policy Address",
  },
  {
    id: 3,
    thumbnail:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600",
    title: "Town Hall Q&A",
  },
];

export default function Media() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Gallery
            </span>
            <h1 className="heading-xl text-primary-foreground mb-6">
              Media Gallery
            </h1>
            <p className="body-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Photos and videos from the campaign trail.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="mb-8 mx-auto flex justify-center">
              <TabsTrigger value="photos">Photos</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
            </TabsList>
            <TabsContent value="photos">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((photo) => (
                  <motion.div
                    key={photo.id}
                    whileHover={{ scale: 1.02 }}
                    className="cursor-pointer rounded-2xl overflow-hidden"
                    onClick={() => setSelectedImage(photo.src)}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full aspect-square object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="videos">
              <div className="grid md:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center group-hover:bg-foreground/60 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                        <Play className="text-accent-foreground" />
                      </div>
                    </div>
                    <p className="absolute bottom-4 left-4 text-primary-foreground font-semibold">
                      {video.title}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-primary-foreground z-10"
          >
            <X size={24} />
          </button>
          {selectedImage && (
            <img
              src={selectedImage.replace("w=600", "w=1200")}
              alt="Gallery"
              className="w-full rounded-2xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
