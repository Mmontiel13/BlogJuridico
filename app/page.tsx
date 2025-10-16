"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import {
  Menu,
  X,
  Scale,
  Users,
  Building2,
  Heart,
  FileText,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Car,
  MessageSquare,
  Send,
  Plus,
  Award,
} from "lucide-react"

const logo = new URL("../assets/logo.jpg", import.meta.url).href;


// Smooth scroll function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

// Animation wrapper component
function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Navbar Component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Inicio", id: "inicio" },
    { name: "Especialidades", id: "especialidades" },
    { name: "Asistencia Pública", id: "social" },
    { name: "Corralones", id: "corralones" },
    { name: "Nosotros", id: "nosotros" },
    { name: "Equipo", id: "equipo" },
    { name: "Anuncios", id: "blog" },
    { name: "Discusión", id: "discusion" },
    { name: "Contacto", id: "contacto" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img
              src={logo}
              alt="Calva Corro Abogados"
              className="h-10 w-10 md:h-10 md:w-10 object-cover rounded-full"
            />
            <span className="sm:inline text-[#1D4E89] font-bold text-lg md:text-xl">
              Calva Corro Abogados
            </span>
          </button>



          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-[#1D4E89] font-medium transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#1D4E89] transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id)
                  setIsOpen(false)
                }}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-[#F1F5F9] hover:text-[#1D4E89] transition-colors"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#5630c7] via-[#2c3e99] to-[#b2d438] text-white pt-16"
    >
      <div className="absolute inset-0 bg-[url('/back.jpeg')] bg-cover bg-center opacity-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <Scale className="h-16 w-16 md:h-20 md:w-20 mx-auto mb-4" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Calva Corro Abogados
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-12 text-balance opacity-90">
            Nada por la fuerza, todo por el derecho, la justica y la razón
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contacto")}
              className="bg-white text-[#1D4E89] hover:bg-gray-100 text-lg px-8 py-6"
            >
              Contáctanos
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("nosotros")}
              className="bg-white text-[#1D4E89] hover:bg-gray-100 text-lg px-8 py-6"
            >
              Conócenos
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Practice Areas Section
function PracticeAreasSection() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null) // 👈 Nuevo estado
  const [isImageOpen, setIsImageOpen] = useState(false) // 👈 Controla el modal de imagen

  const handleImageClick = (image: string) => {
    setSelectedImage(image)
    setIsImageOpen(true)
  }

  const areas = [
    { name: "Penal", icon: Scale, description: "Defensa en procesos penales" },
    { name: "Administrativa", icon: Building2, description: "Derecho administrativo y público" },
    { name: "Civil", icon: FileText, description: "Litigios y contratos civiles" },
    { name: "Familiar", icon: Heart, description: "Derecho familiar y sucesiones" },
    { name: "Mercantil", icon: Building2, description: "Derecho comercial y empresarial" },
    { name: "Amparo", icon: Scale, description: "Protección de derechos constitucionales" },
    { name: "Laboral", icon: Users, description: "Derecho del trabajo" },
    { name: "Fiscal", icon: FileText, description: "Asesoría tributaria" },
    { name: "Ambiental", icon: Heart, description: "Derecho ambiental" },
    { name: "Corporativo", icon: Building2, description: "Derecho corporativo" },
  ]

  const wonCases: { [key: string]: Array<{ title: string; description: string; image: string }> } = {
    Penal: [
      {
        title: "Absolución en caso de fraude",
        description:
          "Defensa exitosa de cliente acusado de fraude, logrando absolución total por falta de pruebas contundentes.",
        image: "/sentencia.jpeg",
      },
      {
        title: "Reducción de sentencia por robo",
        description: "Negociación exitosa que redujo la sentencia de 8 años a 3 años con beneficios de preliberación.",
        image: "/sentencia.jpeg",
      },
      {
        title: "Amparo contra orden de aprehensión",
        description: "Amparo concedido que suspendió orden de aprehensión irregular, protegiendo libertad del cliente.",
        image: "/sentencia.jpeg",
      },
    ],
    Administrativa: [
      {
        title: "Anulación de multa administrativa",
        description: "Impugnación exitosa de multa de $500,000 por violación al debido proceso administrativo.",
        image: "/sentencia.jpeg",
      },
      {
        title: "Revocación de clausura",
        description: "Lograda reapertura de negocio clausurado indebidamente por autoridad municipal.",
        image: "/sentencia.jpeg",
      },
    ],
    Civil: [
      {
        title: "Recuperación de propiedad",
        description: "Juicio reivindicatorio ganado, recuperando propiedad valuada en $3 millones de pesos.",
        image: "/sentencia.jpeg",
      },
      {
        title: "Cumplimiento de contrato",
        description: "Sentencia favorable obligando al cumplimiento de contrato de compraventa.",
        image: "/sentencia.jpeg",
      },
    ],
    Familiar: [
      {
        title: "Custodia compartida",
        description: "Lograda custodia compartida equitativa protegiendo el interés superior de los menores.",
        image: "/sentencia.jpeg",
      },
      {
        title: "Pensión alimenticia justa",
        description: "Establecida pensión alimenticia proporcional a las necesidades reales de los hijos.",
        image: "/sentencia.jpeg",
      },
    ],
    Mercantil: [
      {
        title: "Resolución de conflicto societario",
        description: "Mediación exitosa en conflicto entre socios, evitando disolución de empresa.",
        image: "/sentencia.jpeg",
      },
      {
        title: "Cobro de pagarés",
        description: "Recuperación de $2 millones mediante juicio ejecutivo mercantil.",
        image: "/sentencia.jpeg",
      },
    ],
    Amparo: [
      {
        title: "Amparo contra ley inconstitucional",
        description: "Amparo concedido declarando inconstitucional aplicación de ley fiscal retroactiva.",
        image: "/sentencia.jpeg",
      },
      {
        title: "Protección de garantías individuales",
        description: "Amparo exitoso contra actos de autoridad que violaban derecho de audiencia.",
        image: "/elegant-law-office.png",
      },
    ],
    Laboral: [
      {
        title: "Indemnización por despido injustificado",
        description: "Laudo favorable por $850,000 por despido injustificado y prestaciones no pagadas.",
        image: "/sentencia.jpeg",
      },
      {
        title: "Reinstalación laboral",
        description: "Lograda reinstalación de trabajador con pago de salarios caídos.",
        image: "/sentencia.jpeg",
      },
    ],
    Fiscal: [
      {
        title: "Cancelación de crédito fiscal",
        description: "Anulado crédito fiscal de $1.5 millones por vicios en el procedimiento de fiscalización.",
        image: "/sentencia.jpeg",
      },
      {
        title: "Devolución de impuestos",
        description: "Recuperación de $600,000 en devolución de impuestos pagados indebidamente.",
        image: "/sentencia.jpeg",
      },
    ],
    Ambiental: [
      {
        title: "Suspensión de obra contaminante",
        description: "Lograda suspensión de obra industrial que afectaba ecosistema local.",
        image: "/sentencia.jpeg",
      },
      {
        title: "Amparo ambiental",
        description: "Amparo concedido protegiendo área natural de desarrollo inmobiliario irregular.",
        image: "/sentencia.jpeg",
      },
    ],
    Corporativo: [
      {
        title: "Fusión empresarial exitosa",
        description: "Asesoría legal en fusión de dos empresas con activos combinados de $50 millones.",
        image: "/sentencia.jpeg",
      },
      {
        title: "Reestructuración corporativa",
        description: "Reestructuración legal de grupo empresarial optimizando estructura fiscal.",
        image: "/sentencia.jpeg",
      },
    ],
  }

  const handleSpecialtyClick = (specialtyName: string) => {
    setSelectedSpecialty(specialtyName)
    setIsModalOpen(true)
  }

  return (
  <section id="especialidades" className="py-20 md:py-32 bg-[#F1F5F9]">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D4E89] mb-4 text-balance">
            Áreas de Especialidad
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            Ofrecemos servicios legales especializados en diversas áreas del derecho
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {areas.map((area, index) => (
          <AnimatedSection key={area.name}>
            <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3 }}>
              <Card
                className="h-full hover:shadow-xl transition-shadow cursor-pointer border-2 hover:border-[#1D4E89]"
                onClick={() => handleSpecialtyClick(area.name)}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-[#1D4E89] text-white rounded-2xl w-fit">
                    <area.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl text-[#1D4E89]">{area.name}</CardTitle>
                  <CardDescription className="text-sm">{area.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      {/* Modal principal para sentencias ganadas */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedSpecialty && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl md:text-2xl text-[#1D4E89] flex items-center gap-3">
                  <Award className="h-8 w-8" />
                  Algunas Sentencias Ganadas - {selectedSpecialty}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {wonCases[selectedSpecialty]?.map((case_, idx) => (
                  <Card key={idx} className="border-2 border-[#1D4E89] overflow-hidden">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div
                        className="md:col-span-1 cursor-pointer hover:opacity-90 transition"
                        onClick={() => handleImageClick(case_.image)} // 👈 abre imagen
                      >
                        <div className="aspect-square md:aspect-auto md:h-full overflow-hidden">
                          <img
                            src={case_.image || "/placeholder.svg"}
                            alt={case_.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2 p-6">
                        <CardTitle className="text-lg text-[#1D4E89] mb-3">{case_.title}</CardTitle>
                        <p className="text-gray-700 leading-relaxed">{case_.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Modal secundario (lightbox) para ampliar imagen */}
      <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
  <DialogContent className="max-w-3xl bg-transparent border-none shadow-none">
    <VisuallyHidden>
      <DialogTitle>Imagen ampliada</DialogTitle>
    </VisuallyHidden>

    {selectedImage && (
      <img
        src={selectedImage}
        alt="Imagen ampliada"
        className="w-full h-auto rounded-2xl shadow-xl"
      />
    )}
  </DialogContent>
</Dialog>
    </div>
  </section>
)
}

// Social Work Section
function SocialWorkSection() {
  return (
    <section id="social" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D4E89] mb-4 text-balance">
              Asistencia Pública
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-balance">
              Comprometidos con la justicia social, ofrecemos amparos gratuitos para quienes más lo necesitan
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <Card className="mb-8 border-2 border-[#1D4E89]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D4E89]">Amparos sin costo</CardTitle>
                <CardDescription className="text-base">
                  Nuestro programa de asistencia legal sin costo está diseñado para proteger los derechos
                  constitucionales. Creemos que el acceso a la justicia es un
                  derecho fundamental.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/WKj4G0UT7Xg"
                      title="Trabajo Social - Amparos sin costo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <Button
                      size="lg"
                      onClick={() => scrollToSection("contacto")}
                      className="bg-[#1D4E89] hover:bg-[#163d6f] text-white"
                    >
                      Solicitar Información
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function CorrealonesSection() {
  const whatsappNumber = "522212837392" // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent(
    "Hola, me interesa obtener información sobre el servicio de recuperación de vehículos sin pago de corralón.",
  )

  return (
    <section id="corralones" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 bg-[#1D4E89] text-white rounded-2xl mb-6">
              <Car className="h-12 w-12" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D4E89] mb-4 text-balance">
              No Pago de Corralones
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-balance">
              Recupera tu vehículo sin pagar el corralón. Te ayudamos con el proceso legal.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1D4E89]">
                  ¿Tu vehículo fue remitido al corralón?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Si tu vehículo fue llevado a un corralón de manera irregular o consideras que tus derechos fueron
                  violados, podemos ayudarte a recuperarlo sin necesidad de pagar las tarifas del depósito vehicular.
                </p>
                <div className="bg-[#F1F5F9] p-6 rounded-2xl border-l-4 border-[#1D4E89]">
                  <h4 className="font-bold text-[#1D4E89] mb-3">¿Cómo te ayudamos?</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Análisis de tu caso</li>
                    <li>✓ Tramitación de amparo para liberación</li>
                    <li>✓ Representación legal completa</li>
                    <li>✓ Recuperación sin pago de corralón</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#1D4E89]">
                  <h4 className="font-bold text-[#1D4E89] mb-3">Requisitos básicos:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Tarjeta de circulación</li>
                    <li>• Identificación oficial</li>
                    <li>• Boleta de infracción (si aplica)</li>
                    <li>• Comprobante de domicilio</li>
                  </ul>
                </div>
                <Button
                  size="lg"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")}
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg py-6"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contactar por WhatsApp
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <Card className="overflow-hidden shadow-2xl border-2 border-[#1D4E89]">
                <div className="aspect-square bg-gradient-to-br from-[#1D4E89] to-[#2563A8] p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Car className="h-32 w-32 mx-auto mb-6 opacity-90" />
                    <h3 className="text-2xl font-bold mb-4">Recupera tu vehículo</h3>
                    <p className="text-lg opacity-90">Sin pagar tarifas excesivas de corralón</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#1D4E89] text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Asesoria</h4>
                        <p className="text-sm text-gray-600">Evaluamos tu caso</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#1D4E89] text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Proceso legal</h4>
                        <p className="text-sm text-gray-600">Iniciamos el amparo correspondiente</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#1D4E89] text-white rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Recuperación</h4>
                        <p className="text-sm text-gray-600">Obtienes tu vehículo de vuelta</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <section id="nosotros" className="py-20 md:py-32 bg-[#F1F5F9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D4E89] mb-4 text-balance">
              Sobre Nosotros
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1D4E89]">Nuestra Misión</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  En Calva Corro Abogados, nos dedicamos a proporcionar servicios legales de la más alta calidad,
                  guiados por nuestro lema: "Nada por la fuerza, todo por el derecho y la razón".
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Con años de experiencia en diversas áreas del derecho, nuestro equipo está comprometido con la defensa
                  de los derechos de nuestros clientes, siempre actuando con integridad, profesionalismo y dedicación.
                </p>
                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#1D4E89]">
                  <h4 className="font-bold text-[#1D4E89] mb-2">Nuestros Valores</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Compromiso con la justicia</li>
                    <li>✓ Excelencia profesional</li>
                    <li>✓ Atención personalizada</li>
                    <li>✓ Responsabilidad social</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/bcASlDa8pN4"
                  title="Sobre Calva Corro Abogados"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

// Team Section
function TeamSection() {
  const teamMembers = [
    {
      name: "Lic. Israel Calva Corro",
      education: "Licenciado en Derecho por la BUAP",
      profession: "Maestría en derecho constitucional de amparo",
      image: new URL("../assets/isra.png", import.meta.url).href,
    },
    {
      name: "Lic. Israel Calva Corro",
      education: "Licenciado en Derecho",
      profession: "Especialista en Derecho Penal y Amparo",
      image: logo,
    },
    {
      name: "Lic. Israel Calva Corro",
      education: "Licenciado en Derecho",
      profession: "Especialista en Derecho Penal y Amparo",
      image: logo,
    },
    {
      name: "Lic. Israel Calva Corro",
      education: "Licenciado en Derecho",
      profession: "Especialista en Derecho Penal y Amparo",
      image: logo,
    },
  ]

  return (
    <section id="equipo" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D4E89] mb-4 text-balance">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Profesionales comprometidos con la excelencia y la justicia
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={index}>
              <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card className="h-full hover:shadow-2xl transition-shadow overflow-hidden">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-[#1D4E89] mb-2">{member.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-600 mb-1">{member.education}</CardDescription>
                    <CardDescription className="text-sm font-medium text-gray-700">{member.profession}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Blog Section
function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null)

  const blogPosts = [
    {
      title: "Nuevas Reformas en Materia Laboral 2025",
      date: "15 de Marzo, 2025",
      preview:
        "Conoce las últimas modificaciones a la Ley Federal del Trabajo y cómo pueden afectar a tu empresa o relación laboral.",
      image: "/legal-documents-office.jpg",
      fullContent: `Las reformas laborales de 2025 representan un cambio significativo en la legislación mexicana. Entre los puntos más destacados se encuentran:

1. **Nuevos derechos de teletrabajo**: Se establecen regulaciones claras sobre el trabajo remoto, incluyendo el derecho a la desconexión digital y la obligación del empleador de proporcionar las herramientas necesarias.

2. **Ampliación de permisos parentales**: Se extiende el periodo de licencia de paternidad y se introducen nuevos permisos para el cuidado de familiares enfermos.

3. **Protección contra el acoso laboral**: Se fortalecen los mecanismos de denuncia y sanción para casos de acoso y discriminación en el lugar de trabajo.

4. **Flexibilidad horaria**: Se promueven esquemas de horarios flexibles que permitan una mejor conciliación entre la vida laboral y personal.

Estas reformas buscan modernizar las relaciones laborales y adaptarlas a las nuevas realidades del mercado de trabajo. Es fundamental que tanto empleadores como trabajadores conozcan estos cambios para garantizar el cumplimiento de la ley y la protección de los derechos laborales.`,
    },
    {
      title: "Guía Completa sobre el Juicio de Amparo",
      date: "8 de Marzo, 2025",
      preview:
        "Todo lo que necesitas saber sobre el amparo: procedimiento, requisitos y casos en los que procede este recurso constitucional.",
      image: "/courthouse-justice.jpg",
      fullContent: `El juicio de amparo es uno de los instrumentos más importantes del sistema jurídico mexicano para la protección de los derechos fundamentales. Esta guía te ayudará a comprender sus aspectos esenciales:

**¿Qué es el amparo?**
El amparo es un medio de defensa constitucional que protege a las personas contra actos de autoridad que violan sus derechos fundamentales establecidos en la Constitución.

**Tipos de amparo:**
- **Amparo indirecto**: Se presenta ante un Juez de Distrito y procede contra leyes, actos de autoridad fuera de juicio o actos en juicio cuando no existe otro medio de defensa.
- **Amparo directo**: Se presenta ante un Tribunal Colegiado de Circuito contra sentencias definitivas o laudos.

**Requisitos para promover un amparo:**
1. Que exista un acto de autoridad que afecte derechos fundamentales
2. Que el quejoso tenga interés jurídico
3. Que se presente dentro de los plazos legales (generalmente 15 días)
4. Que no exista otro medio de defensa o que los existentes sean insuficientes

**Procedimiento:**
El proceso incluye la presentación de la demanda, la admisión, el informe justificado de la autoridad responsable, la audiencia constitucional y la sentencia.

En Calva Corro Abogados contamos con amplia experiencia en juicios de amparo y podemos asesorarte en todo el proceso.`,
    },
    {
      title: "Protección de Datos Personales en México",
      date: "1 de Marzo, 2025",
      preview:
        "Análisis de la Ley Federal de Protección de Datos Personales y las obligaciones para empresas y particulares.",
      image: "/data-privacy-security.png",
      fullContent: `La protección de datos personales es un derecho fundamental en la era digital. La Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) establece un marco regulatorio importante:

**Principios fundamentales:**
- **Licitud**: Los datos deben obtenerse de forma legal
- **Consentimiento**: Se requiere autorización del titular
- **Información**: Transparencia sobre el uso de los datos
- **Calidad**: Los datos deben ser exactos y actualizados
- **Finalidad**: Uso conforme al propósito informado
- **Lealtad**: No obtener datos por medios engañosos
- **Proporcionalidad**: Solo los datos necesarios
- **Responsabilidad**: El responsable debe garantizar el cumplimiento

**Obligaciones de las empresas:**
1. Elaborar y publicar un Aviso de Privacidad
2. Implementar medidas de seguridad
3. Atender los derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)
4. Notificar vulneraciones de seguridad
5. Realizar evaluaciones de impacto en privacidad

**Derechos de los titulares:**
Los individuos tienen derecho a conocer qué datos se tienen sobre ellos, para qué se usan, solicitar su corrección, cancelación u oposición a su uso.

Las sanciones por incumplimiento pueden ser significativas, por lo que es crucial que las organizaciones cumplan con estas obligaciones.`,
    },
    {
      title: "Derecho Familiar: Pensión Alimenticia",
      date: "22 de Febrero, 2025",
      preview: "Aspectos legales de la pensión alimenticia, cálculo, procedimiento y derechos de los beneficiarios.",
      image: "/family-law-consultation.jpg",
      fullContent: `La pensión alimenticia es una obligación legal que garantiza el bienestar de los hijos y, en algunos casos, del cónyuge. Aquí te explicamos los aspectos más importantes:

**¿Qué comprende la pensión alimenticia?**
No solo incluye alimentos, sino también:
- Habitación
- Vestido
- Asistencia médica
- Educación
- Esparcimiento

**¿Quiénes tienen derecho?**
- Hijos menores de edad
- Hijos mayores que estudien hasta los 25 años
- Hijos con discapacidad (sin límite de edad)
- Cónyuge que lo necesite (en casos específicos)

**¿Cómo se calcula?**
El monto se determina considerando:
1. Las necesidades del acreedor alimentario
2. Las posibilidades económicas del deudor
3. El nivel de vida que tenía la familia

Generalmente se establece como un porcentaje de los ingresos del deudor (comúnmente entre 15% y 30% por hijo).

**Procedimiento legal:**
Si no hay acuerdo voluntario, se puede iniciar un juicio de alimentos que incluye:
1. Demanda ante el Juez Familiar
2. Aseguramiento provisional de alimentos
3. Audiencia de pruebas
4. Sentencia definitiva

**Incumplimiento:**
El no pago de la pensión puede derivar en:
- Embargo de cuentas bancarias o salario
- Garantía sobre bienes
- En casos extremos, arresto hasta por 36 horas

Es importante contar con asesoría legal especializada para garantizar que se respeten los derechos de los menores y se establezca una pensión justa.`,
    },
  ]

  return (
    <section id="blog" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D4E89] mb-4 text-balance">
              Anuncios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Mantente informado con nuestros artículos sobre temas legales relevantes
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {blogPosts.map((post, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                      <Card
                        className="h-full hover:shadow-2xl transition-shadow cursor-pointer overflow-hidden"
                        onClick={() => setSelectedPost(index)}
                      >
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg text-[#1D4E89] line-clamp-2">{post.title}</CardTitle>
                          <CardDescription className="text-sm text-gray-500">{post.date}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.preview}</p>
                          <Button variant="link" className="text-[#1D4E89] p-0 h-auto">
                            Leer más →
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious/>
              <CarouselNext/>
            </Carousel>
          </div>
        </AnimatedSection>

        <Dialog open={selectedPost !== null} onOpenChange={() => setSelectedPost(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedPost !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl md:text-3xl text-[#1D4E89] mb-4">
                    {blogPosts[selectedPost].title}
                  </DialogTitle>
                  <p className="text-sm text-gray-500">{blogPosts[selectedPost].date}</p>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="aspect-video overflow-hidden rounded-xl">
                    <img
                      src={blogPosts[selectedPost].image || "/placeholder.svg"}
                      alt={blogPosts[selectedPost].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="prose prose-lg max-w-none">
                    {blogPosts[selectedPost].fullContent.split("\n\n").map((paragraph, idx) => (
                      <p key={idx} className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {/* <div className="flex justify-end pt-4 border-t">
                    <Button onClick={() => scrollToSection("contacto")} className="bg-[#1D4E89] hover:bg-[#163d6f]">
                      ¿Necesitas asesoría? Contáctanos
                    </Button>
                  </div> */}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

function DiscussionSection() {
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: "¿Cuánto tiempo tarda un juicio de amparo?",
      date: "20 de Marzo, 2025",
      author: "María González",
      content:
        "Me gustaría saber cuánto tiempo aproximadamente tarda un juicio de amparo desde que se presenta hasta que se resuelve. ¿Alguien tiene experiencia con esto?",
      comments: [
        {
          id: 1,
          author: "Lic. Roberto Corro",
          date: "20 de Marzo, 2025",
          content:
            "El tiempo puede variar dependiendo del tipo de amparo y la complejidad del caso. En promedio, un amparo indirecto puede tardar entre 6 meses y 2 años. Es importante contar con asesoría legal especializada para agilizar el proceso.",
        },
        {
          id: 2,
          author: "Carlos Méndez",
          date: "21 de Marzo, 2025",
          content: "En mi experiencia personal, mi amparo tardó aproximadamente 8 meses. Todo depende del juzgado.",
        },
      ],
    },
    {
      id: 2,
      title: "Dudas sobre pensión alimenticia",
      date: "18 de Marzo, 2025",
      author: "Ana Martínez",
      content:
        "¿Es posible modificar el monto de la pensión alimenticia si cambian las circunstancias económicas del padre? ¿Qué documentos se necesitan?",
      comments: [
        {
          id: 1,
          author: "Lic. Ana Patricia Ruiz",
          date: "19 de Marzo, 2025",
          content:
            "Sí, es posible solicitar una modification de pensión alimenticia cuando hay cambios sustanciales en las circunstancias económicas. Se requiere presentar una demanda de modification con pruebas de los cambios económicos (recibos de nómina, estados de cuenta, etc.).",
        },
      ],
    },
    // Added new discussion
    {
      id: 3,
      title: "Recuperación de vehículo del corralón",
      date: "15 de Marzo, 2025",
      author: "Pedro Ramírez",
      content:
        "Mi auto fue llevado al corralón hace 3 meses y las tarifas son excesivas. ¿Realmente es posible recuperarlo sin pagar?",
      comments: [
        {
          id: 1,
          author: "Lic. María Calva",
          date: "16 de Marzo, 2025",
          content:
            "Sí, mediante un amparo es posible recuperar tu vehículo si se demuestra que hubo irregularidades en el procedimiento de remisión. Te recomiendo agendar una consulta para revisar tu caso específico.",
        },
      ],
    },
  ])

  const [newComment, setNewComment] = useState<{ [key: number]: string }>({})
  const [commentAuthor, setCommentAuthor] = useState<{ [key: number]: string }>({})

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [newDiscussion, setNewDiscussion] = useState({
    title: "",
    content: "",
    author: "",
  })

  const handleAddComment = (discussionId: number) => {
    if (!newComment[discussionId]?.trim() || !commentAuthor[discussionId]?.trim()) return

    setDiscussions(
      discussions.map((discussion) => {
        if (discussion.id === discussionId) {
          return {
            ...discussion,
            comments: [
              ...discussion.comments,
              {
                id: discussion.comments.length + 1,
                author: commentAuthor[discussionId],
                date: new Date().toLocaleDateString("es-MX", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }),
                content: newComment[discussionId],
              },
            ],
          }
        }
        return discussion
      }),
    )

    setNewComment({ ...newComment, [discussionId]: "" })
    setCommentAuthor({ ...commentAuthor, [discussionId]: "" })
  }

  const handleCreateDiscussion = () => {
    if (!newDiscussion.title.trim() || !newDiscussion.content.trim() || !newDiscussion.author.trim()) {
      alert("Por favor completa todos los campos")
      return
    }

    const discussion = {
      id: discussions.length + 1,
      title: newDiscussion.title,
      date: new Date().toLocaleDateString("es-MX", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      author: newDiscussion.author,
      content: newDiscussion.content,
      comments: [],
    }

    setDiscussions([...discussions, discussion])
    setNewDiscussion({ title: "", content: "", author: "" })
    setIsCreateModalOpen(false)
  }

  return (
    <section id="discusion" className="py-20 md:py-32 bg-[#F1F5F9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 bg-[#1D4E89] text-white rounded-2xl mb-6">
              <MessageSquare className="h-12 w-12" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D4E89] mb-4 text-balance">
              Discusión Legal
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-balance">
              Comparte tus dudas y experiencias sobre temas legales con nuestra comunidad
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto mb-8 flex justify-center">
          <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-[#1D4E89] hover:bg-[#163d6f] text-white">
                <Plus className="mr-2 h-5 w-5" />
                Crear Nueva Discusión
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl text-[#1D4E89]">Crear Nueva Discusión</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <label htmlFor="discussion-author" className="block text-sm font-medium text-gray-700 mb-2">
                    Tu nombre
                  </label>
                  <Input
                    id="discussion-author"
                    placeholder="Nombre completo"
                    value={newDiscussion.author}
                    onChange={(e) => setNewDiscussion({ ...newDiscussion, author: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="discussion-title" className="block text-sm font-medium text-gray-700 mb-2">
                    Título de la discusión
                  </label>
                  <Input
                    id="discussion-title"
                    placeholder="¿Sobre qué quieres preguntar?"
                    value={newDiscussion.title}
                    onChange={(e) => setNewDiscussion({ ...newDiscussion, title: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="discussion-content" className="block text-sm font-medium text-gray-700 mb-2">
                    Descripción o pregunta
                  </label>
                  <Textarea
                    id="discussion-content"
                    placeholder="Describe tu duda o tema de discusión..."
                    value={newDiscussion.content}
                    onChange={(e) => setNewDiscussion({ ...newDiscussion, content: e.target.value })}
                    className="min-h-[150px]"
                  />
                </div>
                <Button
                  onClick={handleCreateDiscussion}
                  className="w-full bg-[#1D4E89] hover:bg-[#163d6f] text-white"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Publicar Discusión
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <AnimatedSection>
          <div className="max-w-5xl mx-auto px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {discussions.map((discussion) => (
                  <CarouselItem key={discussion.id}>
                    <Card className="overflow-hidden shadow-lg">
                      <CardHeader className="bg-white border-b-2 border-[#F1F5F9]">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-2xl text-[#1D4E89] mb-2">{discussion.title}</CardTitle>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="font-medium">{discussion.author}</span>
                              <span>•</span>
                              <span>{discussion.date}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <p className="text-gray-700 leading-relaxed mb-6">{discussion.content}</p>

                        {/* Comments Section */}
                        <div className="space-y-4 mb-6">
                          <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                            <MessageSquare className="h-5 w-5 text-[#1D4E89]" />
                            Comentarios ({discussion.comments.length})
                          </h4>

                          {discussion.comments.map((comment) => (
                            <div key={comment.id} className="bg-[#F1F5F9] p-4 rounded-xl border-l-4 border-[#1D4E89]">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-semibold text-sm text-[#1D4E89]">{comment.author}</span>
                                <span className="text-xs text-gray-500">• {comment.date}</span>
                              </div>
                              <p className="text-sm text-gray-700 leading-relaxed">{comment.content}</p>
                            </div>
                          ))}
                        </div>

                        {/* Add Comment Form */}
                        <div className="border-t-2 border-[#F1F5F9] pt-6">
                          <h4 className="font-semibold text-gray-900 mb-4">Agregar comentario</h4>
                          <div className="space-y-3">
                            <Input
                              placeholder="Tu nombre"
                              value={commentAuthor[discussion.id] || ""}
                              onChange={(e) => setCommentAuthor({ ...commentAuthor, [discussion.id]: e.target.value })}
                              className="w-full"
                            />
                            <Textarea
                              placeholder="Escribe tu comentario..."
                              value={newComment[discussion.id] || ""}
                              onChange={(e) => setNewComment({ ...newComment, [discussion.id]: e.target.value })}
                              className="w-full min-h-[100px]"
                            />
                            <Button
                              onClick={() => handleAddComment(discussion.id)}
                              className="bg-[#1D4E89] hover:bg-[#163d6f] text-white"
                            >
                              <Send className="mr-2 h-4 w-4" />
                              Publicar comentario
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious/>
              <CarouselNext/>
            </Carousel>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { nombre, correo, telefono, mensaje } = formData

    // Construye el texto para WhatsApp
    const texto = `Hola, soy ${nombre}.%0A
Mi correo es: ${correo}%0A
Mi número es: ${telefono}%0A
Me contacto por medio de la pagina%0A
Mensaje: ${mensaje}`

    // Número del despacho (sin signos ni espacios)
    const whatsappNumber = "522212837392"

    // Enlace a WhatsApp
    const url = `https://wa.me/${whatsappNumber}?text=${texto}`

    window.open(url, "_blank") // Abre WhatsApp en una nueva pestaña

    // Limpia el formulario
    setFormData({ nombre: "", correo: "", telefono: "", mensaje: "" })
  }

  return (
    <section id="contacto" className="py-5 md:py-5 bg-[#F1F5F9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D4E89] mb-4 text-balance">
              Contáctanos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos por WhatsApp
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D4E89]">Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo
                    </label>
                    <Input
                      id="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo electrónico
                    </label>
                    <Input
                      id="correo"
                      type="email"
                      required
                      value={formData.correo}
                      onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                      className="w-full"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Número telefónico
                    </label>
                    <Input
                      id="telefono"
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full"
                      placeholder="Tu número (ej. 222 123 4567)"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      id="mensaje"
                      required
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full min-h-[150px]"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg py-6"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Contactar por WhatsApp
                  </Button>

                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#1D4E89]">Información de contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#1D4E89] text-white rounded-xl">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Dirección</h4>
                      <p className="text-gray-600">
                        Av. Calva 123, Col. Corro Abogados
                        <br />
                        Ciudad Puebla, CP 06000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#1D4E89] text-white rounded-xl">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                      <p className="text-gray-600">+52 222 513 0546</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#1D4E89] text-white rounded-xl">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600 break-all">notificaciones@calvacorroabogados.net</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#1D4E89]">Síguenos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 justify-center">
                    <a
                      href="https://www.facebook.com/CalvaCorroAbogados"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#1D4E89] text-white rounded-xl hover:bg-[#163d6f] transition-colors"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.instagram.com/calvacorroabogados/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#1D4E89] text-white rounded-xl hover:bg-[#163d6f] transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@calvacorroisrael?lang=es"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#1D4E89] text-white rounded-xl hover:bg-[#163d6f] transition-colors"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.youtube.com/@calvacorroabogados3989"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#1D4E89] text-white rounded-xl hover:bg-[#163d6f] transition-colors"
                    >
                      <Youtube className="h-6 w-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

<button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img
              src={logo}
              alt="Calva Corro Abogados"
              className="h-12 w-12 md:h-14 md:w-14 object-cover rounded-full"
            />
            <span className="hidden sm:inline text-[#1D4E89] font-bold text-lg md:text-xl">
              Calva Corro Abogados
            </span>
          </button>
// Footer
function Footer() {
  return (
    <footer className="bg-[#1D4E89] text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Calva Corro Abogados"
              className="h-6 w-6 md:h-6 md:w-6 object-cover rounded-full"
            />
            <span className="font-semibold">Calva Corro Abogados</span>
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm opacity-90">© 2025 Calva Corro Abogados. Todos los derechos reservados.</p>
          </div>
          <button className="text-sm hover:underline opacity-90">Aviso de Privacidad</button>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PracticeAreasSection />
      <SocialWorkSection />
      <CorrealonesSection />
      <AboutSection />
      <TeamSection />
      <BlogSection />
      <DiscussionSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
