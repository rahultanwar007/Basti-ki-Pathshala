import AboutSection from "@/components/AboutSection/AboutSection";
import CTAButton from "@/components/ui/CTAButton";
import StatCard from "@/components/ui/StatCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative w-full h-screen bg-[url('https://cdn.pixabay.com/photo/2020/11/10/21/00/boy-5731001_1280.jpg')] bg-cover bg-center bg-blend-overlay bg-black/40">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-yellow-200 to-white text-transparent bg-clip-text">
  Basti Ki Pathshala
</h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed px-2">
              Spreading{" "}
              <span className="text-yellow-300 font-semibold">LIGHT</span>, one
              child at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <CTAButton href="/register">Register to Volunteer</CTAButton>
            <CTAButton href="/admin/login" variant="outline">Admin Panel</CTAButton>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <StatCard value="500+" label="Children Educated" />
          <StatCard value="50+" label="Volunteers" />
          <StatCard value="10+" label="Communities Served" />
          <StatCard value="95%" label="Success Rate" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Join Our Mission Today
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 px-4">
            Be part of the change. Volunteer your time, donate resources, or
            spread the word about our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <CTAButton href="/register" color="white">Become a Volunteer</CTAButton>
          <CTAButton href="/admin/login" variant="outline" color="white">Admin Panel</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
