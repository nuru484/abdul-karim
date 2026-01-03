"use client";
import { motion, Variants, Transition } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Play, Image as ImageIcon, Video as VideoIcon } from "lucide-react";

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600",
    alt: "Campaign rally",
    category: "Events",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=600",
    alt: "Community meeting",
    category: "Community",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600",
    alt: "Town hall",
    category: "Events",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600",
    alt: "Press conference",
    category: "Press",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600",
    alt: "Team meeting",
    category: "Team",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600",
    alt: "Volunteer event",
    category: "Community",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600",
    alt: "Campaign office",
    category: "Team",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600",
    alt: "Rally crowd",
    category: "Events",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600",
    alt: "Strategy session",
    category: "Team",
  },
];

const videos = [
  {
    id: 1,
    thumbnail:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600",
    title: "Campaign Launch",
    duration: "5:32",
    category: "Speeches",
  },
  {
    id: 2,
    thumbnail:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600",
    title: "Policy Address",
    duration: "12:45",
    category: "Speeches",
  },
  {
    id: 3,
    thumbnail:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600",
    title: "Town Hall Q&A",
    duration: "28:15",
    category: "Town Halls",
  },
  {
    id: 4,
    thumbnail:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
    title: "Behind the Scenes",
    duration: "8:20",
    category: "Behind the Scenes",
  },
  {
    id: 5,
    thumbnail:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600",
    title: "Community Roundtable",
    duration: "15:40",
    category: "Town Halls",
  },
  {
    id: 6,
    thumbnail:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600",
    title: "Campaign Highlights",
    duration: "3:55",
    category: "Highlights",
  },
];

// Transition typed explicitly
const itemTransition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: itemTransition,
  },
};

export default function Media() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pb-20 lg:pb-24 bg-linear-to-b from-primary to-primary/95 overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
              Gallery
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Media Gallery
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Photos and videos from the campaign trail, capturing moments of
              connection, action, and progress.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Media Content */}
      <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-linear-to-b from-muted/30 via-muted/50 to-muted/30 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Tabs defaultValue="photos" className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center mb-12 sm:mb-16"
            >
              <TabsList className="bg-card border border-border/50 p-1.5 rounded-2xl shadow-sm">
                <TabsTrigger
                  value="photos"
                  className="rounded-xl px-6 sm:px-8 py-3 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground transition-all duration-300"
                >
                  <ImageIcon size={18} className="mr-2" />
                  <span className="font-semibold">Photos</span>
                </TabsTrigger>
                <TabsTrigger
                  value="videos"
                  className="rounded-xl px-6 sm:px-8 py-3 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground transition-all duration-300"
                >
                  <VideoIcon size={18} className="mr-2" />
                  <span className="font-semibold">Videos</span>
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Photos Tab */}
            <TabsContent value="photos" className="mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {photos.map((photo) => (
                  <motion.div
                    key={photo.id}
                    variants={itemVariants}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(photo.src)}
                  >
                    <div className="relative bg-card rounded-2xl sm:rounded-3xl overflow-hidden border border-border/50 hover:border-accent/50 shadow-sm hover:shadow-2xl transition-all duration-500">
                      {/* Hover gradient effect */}
                      <div className="absolute inset-0 bg-linear-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

                      {/* Image */}
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Category badge */}
                        <div className="absolute top-4 left-4 z-20">
                          <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-black/50 backdrop-blur-sm rounded-full uppercase tracking-wider">
                            {photo.category}
                          </span>
                        </div>

                        {/* Alt text on hover */}
                        <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <p className="text-white font-semibold text-sm sm:text-base">
                            {photo.alt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos" className="mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {videos.map((video) => (
                  <motion.div
                    key={video.id}
                    variants={itemVariants}
                    className="group cursor-pointer"
                  >
                    <div className="relative bg-card rounded-2xl sm:rounded-3xl overflow-hidden border border-border/50 hover:border-accent/50 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                      {/* Hover gradient effect */}
                      <div className="absolute inset-0 bg-linear-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

                      {/* Video thumbnail */}
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />

                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent group-hover:bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-xl">
                            <Play
                              className="text-accent-foreground ml-1"
                              size={24}
                            />
                          </div>
                        </div>

                        {/* Duration badge */}
                        <div className="absolute top-4 right-4 z-20">
                          <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-black/70 backdrop-blur-sm rounded-full">
                            {video.duration}
                          </span>
                        </div>

                        {/* Category badge */}
                        <div className="absolute top-4 left-4 z-20">
                          <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-black/50 backdrop-blur-sm rounded-full uppercase tracking-wider">
                            {video.category}
                          </span>
                        </div>
                      </div>

                      {/* Video info */}
                      <div className="relative z-20 p-5 sm:p-6">
                        <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-7xl p-0 bg-transparent border-none shadow-none">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedImage(null)}
            className="absolute -top-12 right-0 sm:top-4 sm:right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 flex items-center justify-center text-white z-50 transition-colors duration-300"
          >
            <X size={20} />
          </motion.button>
          {selectedImage && (
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={selectedImage.replace("w=600", "w=1200")}
              alt="Gallery"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
