// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
// import {
//     Shield,
//     Globe,
//     Users,
//     CheckCircle,
//     Star,
//     ArrowRight,
//     Menu,
//     X,
//     MessageSquare,
//     CreditCard,
//     Building2,
//     Award,
//     TrendingUp,
//     MapPin,
//     Clock,
//     Phone,
//     Mail,
// } from 'lucide-react'
// import { useState } from 'react'
// import { useRouter } from 'next/navigation'

// export default function TradeAfrikaLanding() {
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//     const router = useRouter()

//     const navigateToRegistrationPage = () => {
//         router.push('/register')
//     }

//     return (
//         <div className="min-h-screen bg-white">
//             {/* Top Banner - Social Proof/Trust Indicators */}
//             <div className="bg-[#008048] text-white py-2 px-4">
//                 <div className="max-w-7xl mx-auto flex items-center justify-center text-sm">
//                     <Shield className="h-4 w-4 mr-2" />
//                     <span className="mr-6">✓ KYC Verified Suppliers</span>
//                     <CreditCard className="h-4 w-4 mr-2" />
//                     <span className="mr-6">✓ Escrow Protection</span>
//                     <Globe className="h-4 w-4 mr-2" />
//                     <span>✓ 54 African Countries</span>
//                 </div>
//             </div>

//             {/* Navigation */}
//             <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between items-center h-16">
//                         <div className="flex items-center">
//                             <div className="flex-shrink-0 flex items-center">
//                                 <div className="w-10 h-10 bg-[#008048] rounded-xl flex items-center justify-center">
//                                     <span className="text-white font-bold text-xl">T</span>
//                                 </div>
//                                 <span className="ml-3 text-2xl font-bold text-[#212121]">Trade Afrika</span>
//                             </div>
//                         </div>

//                         {/* Desktop Navigation */}
//                         <div className="hidden md:block">
//                             <div className="ml-10 flex items-baseline space-x-8">
//                                 <Link
//                                     href="#suppliers"
//                                     className="text-[#757575] hover:text-[#008048] px-3 py-2 text-sm font-medium transition-colors"
//                                 >
//                                     Find Suppliers
//                                 </Link>
//                                 <Link
//                                     href="#categories"
//                                     className="text-[#757575] hover:text-[#008048] px-3 py-2 text-sm font-medium transition-colors"
//                                 >
//                                     Categories
//                                 </Link>
//                                 <Link
//                                     href="#how-it-works"
//                                     className="text-[#757575] hover:text-[#008048] px-3 py-2 text-sm font-medium transition-colors"
//                                 >
//                                     How It Works
//                                 </Link>
//                                 <Link
//                                     href="#pricing"
//                                     className="text-[#757575] hover:text-[#008048] px-3 py-2 text-sm font-medium transition-colors"
//                                 >
//                                     Pricing
//                                 </Link>
//                             </div>
//                         </div>

//                         <div className="hidden md:flex items-center space-x-4">
//                             <Button
//                                 variant="outline"
//                                 onClick={navigateToRegistrationPage}
//                                 className="border-[#008048] text-[#008048] hover:bg-[#E8F5E8] bg-transparent"
//                             >
//                                 Sign In
//                             </Button>
//                             <Button
//                                 onClick={navigateToRegistrationPage}
//                                 className="bg-[#008048] hover:bg-[#26A65C] text-white"
//                             >
//                                 Start Trading
//                             </Button>
//                         </div>

//                         {/* Mobile menu button */}
//                         <div className="md:hidden">
//                             <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//                                 {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//                             </Button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Mobile Navigation */}
//                 {mobileMenuOpen && (
//                     <div className="md:hidden">
//                         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
//                             <Link
//                                 href="#suppliers"
//                                 className="block px-3 py-2 text-base font-medium text-[#757575] hover:text-[#008048]"
//                             >
//                                 Find Suppliers
//                             </Link>
//                             <Link
//                                 href="#categories"
//                                 className="block px-3 py-2 text-base font-medium text-[#757575] hover:text-[#008048]"
//                             >
//                                 Categories
//                             </Link>
//                             <Link
//                                 href="#how-it-works"
//                                 className="block px-3 py-2 text-base font-medium text-[#757575] hover:text-[#008048]"
//                             >
//                                 How It Works
//                             </Link>
//                             <Link
//                                 href="#pricing"
//                                 className="block px-3 py-2 text-base font-medium text-[#757575] hover:text-[#008048]"
//                             >
//                                 Pricing
//                             </Link>
//                             <div className="px-3 py-2 space-y-2">
//                                 <Button
//                                     variant="outline"
//                                     className="w-full border-[#008048] text-[#008048] hover:bg-[#E8F5E8] bg-transparent"
//                                 >
//                                     Sign In
//                                 </Button>
//                                 <Button className="w-full bg-[#008048] hover:bg-[#26A65C] text-white">
//                                     Start Trading
//                                 </Button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </nav>

//             {/* Hero Section */}
//             <section className="relative bg-gradient-to-br from-[#E8F5E8] via-white to-[#FFF3E0] py-16 lg:py-24">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid lg:grid-cols-2 gap-12 items-center">
//                         <div>
//                             {/* Social Proof Badge */}
//                             <div className="flex items-center mb-6">
//                                 <Badge className="bg-[#008048] text-white hover:bg-[#26A65C] mr-4">
//                                     🏆 #1 B2B Platform in Africa
//                                 </Badge>
//                                 <div className="flex items-center text-sm text-[#757575]">
//                                     <Star className="h-4 w-4 text-[#FFB300] fill-current mr-1" />
//                                     <span className="font-semibold text-[#212121]">4.9</span>
//                                     <span className="ml-1">(2,847 reviews)</span>
//                                 </div>
//                             </div>

//                             {/* Main Headline */}
//                             <h1 className="text-4xl lg:text-6xl font-bold text-[#212121] leading-tight mb-6">
//                                 Stop Struggling with
//                                 <span className="text-[#008048]"> Cross-Border Trade</span>
//                             </h1>

//                             {/* Value Proposition */}
//                             <p className="text-xl text-[#757575] mb-8 leading-relaxed">
//                                 No more unreliable suppliers or payment risks. Our verified marketplace connects African
//                                 businesses with secure escrow protection, multi-currency support, and comprehensive KYC
//                                 verification.
//                             </p>

//                             {/* Main CTA */}
//                             <div className="flex flex-col sm:flex-row gap-4 mb-8">
//                                 <Button
//                                     size="lg"
//                                     className="bg-[#008048] hover:bg-[#26A65C] text-white px-8 py-4 text-lg"
//                                 >
//                                     Find Verified Suppliers
//                                     <ArrowRight className="ml-2 h-5 w-5" />
//                                 </Button>
//                                 <Button
//                                     size="lg"
//                                     variant="outline"
//                                     className="border-[#008048] text-[#008048] hover:bg-[#E8F5E8] px-8 py-4 text-lg bg-transparent"
//                                 >
//                                     Watch 2-Min Demo
//                                 </Button>
//                             </div>

//                             {/* Trust Indicators */}
//                             <div className="flex flex-wrap items-center gap-6 text-sm text-[#757575]">
//                                 <div className="flex items-center">
//                                     <CheckCircle className="h-5 w-5 text-[#008048] mr-2" />
//                                     Free Registration
//                                 </div>
//                                 <div className="flex items-center">
//                                     <CheckCircle className="h-5 w-5 text-[#008048] mr-2" />
//                                     Money Back Guarantee
//                                 </div>
//                                 <div className="flex items-center">
//                                     <CheckCircle className="h-5 w-5 text-[#008048] mr-2" />
//                                     24/7 Support
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Hero Image/Video */}
//                         <div className="relative">
//                             <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6">
//                                 <Image
//                                     src="/placeholder.svg?height=400&width=600"
//                                     alt="Trade Afrika Platform Dashboard"
//                                     width={600}
//                                     height={400}
//                                     className="rounded-xl w-full"
//                                 />
//                                 {/* Floating Stats */}
//                                 <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-[#E0E0E0]">
//                                     <div className="text-2xl font-bold text-[#008048]">$50M+</div>
//                                     <div className="text-sm text-[#757575]">Trade Volume</div>
//                                 </div>
//                                 <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-[#E0E0E0]">
//                                     <div className="text-2xl font-bold text-[#F46233]">10K+</div>
//                                     <div className="text-sm text-[#757575]">Verified Suppliers</div>
//                                 </div>
//                             </div>
//                             <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#F46233] rounded-full opacity-10 blur-3xl"></div>
//                             <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-[#008048] rounded-full opacity-10 blur-3xl"></div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Social Proof Stats */}
//             <section className="py-12 bg-white border-b border-[#E0E0E0]">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
//                         <div>
//                             <div className="text-3xl lg:text-4xl font-bold text-[#008048] mb-2">54</div>
//                             <div className="text-[#757575]">African Countries</div>
//                         </div>
//                         <div>
//                             <div className="text-3xl lg:text-4xl font-bold text-[#008048] mb-2">10K+</div>
//                             <div className="text-[#757575]">Verified Businesses</div>
//                         </div>
//                         <div>
//                             <div className="text-3xl lg:text-4xl font-bold text-[#008048] mb-2">$50M+</div>
//                             <div className="text-[#757575]">Trade Volume</div>
//                         </div>
//                         <div>
//                             <div className="text-3xl lg:text-4xl font-bold text-[#008048] mb-2">99.8%</div>
//                             <div className="text-[#757575]">Success Rate</div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Top Categories - Bestselling Products Equivalent */}
//             <section id="categories" className="py-20 bg-[#FAFAFA]">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl lg:text-4xl font-bold text-[#212121] mb-6">Top Trading Categories</h2>
//                         <p className="text-xl text-[#757575] max-w-3xl mx-auto">
//                             Connect with verified suppliers across Africa's most active business sectors
//                         </p>
//                     </div>

//                     {/* Category Filters */}
//                     <div className="flex flex-wrap justify-center gap-4 mb-12">
//                         <Button variant="outline" className="bg-[#008048] text-white border-[#008048]">
//                             Agriculture
//                         </Button>
//                         <Button
//                             variant="outline"
//                             className="border-[#008048] text-[#008048] hover:bg-[#E8F5E8] bg-transparent"
//                         >
//                             Manufacturing
//                         </Button>
//                         <Button
//                             variant="outline"
//                             className="border-[#008048] text-[#008048] hover:bg-[#E8F5E8] bg-transparent"
//                         >
//                             Construction
//                         </Button>
//                         <Button
//                             variant="outline"
//                             className="border-[#008048] text-[#008048] hover:bg-[#E8F5E8] bg-transparent"
//                         >
//                             Consumer Goods
//                         </Button>
//                     </div>

//                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {/* Category Card 1 */}
//                         <Card className="bg-white border-[#E0E0E0] hover:border-[#008048] hover:shadow-lg transition-all group">
//                             <CardHeader className="pb-4">
//                                 <Badge className="w-fit bg-[#4CAF50] text-white mb-3">Best Sellers</Badge>
//                                 <div className="aspect-square bg-gradient-to-br from-[#E8F5E8] to-[#FFF3E0] rounded-lg flex items-center justify-center mb-4">
//                                     <Image
//                                         src="/placeholder.svg?height=200&width=200"
//                                         alt="Agriculture Category"
//                                         width={200}
//                                         height={200}
//                                         className="rounded-lg"
//                                     />
//                                 </div>
//                                 <div className="flex items-center mb-2">
//                                     <div className="flex text-[#FFB300]">
//                                         {[...Array(5)].map((_, i) => (
//                                             <Star key={i} className="h-4 w-4 fill-current" />
//                                         ))}
//                                     </div>
//                                     <span className="ml-2 text-sm text-[#757575]">4.8 (1,247 suppliers)</span>
//                                 </div>
//                                 <CardTitle className="text-lg">Agriculture & Food</CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 <p className="text-[#757575] mb-4">
//                                     Connect with verified suppliers of crops, livestock, and agricultural equipment
//                                     across Africa.
//                                 </p>
//                                 <Button className="w-full bg-[#008048] hover:bg-[#26A65C] text-white group-hover:bg-[#26A65C]">
//                                     Find Suppliers
//                                 </Button>
//                             </CardContent>
//                         </Card>

//                         {/* Category Card 2 */}
//                         <Card className="bg-white border-[#E0E0E0] hover:border-[#008048] hover:shadow-lg transition-all group">
//                             <CardHeader className="pb-4">
//                                 <Badge className="w-fit bg-[#F46233] text-white mb-3">New</Badge>
//                                 <div className="aspect-square bg-gradient-to-br from-[#E8F5E8] to-[#FFF3E0] rounded-lg flex items-center justify-center mb-4">
//                                     <Image
//                                         src="/placeholder.svg?height=200&width=200"
//                                         alt="Manufacturing Category"
//                                         width={200}
//                                         height={200}
//                                         className="rounded-lg"
//                                     />
//                                 </div>
//                                 <div className="flex items-center mb-2">
//                                     <div className="flex text-[#FFB300]">
//                                         {[...Array(5)].map((_, i) => (
//                                             <Star key={i} className="h-4 w-4 fill-current" />
//                                         ))}
//                                     </div>
//                                     <span className="ml-2 text-sm text-[#757575]">4.9 (892 suppliers)</span>
//                                 </div>
//                                 <CardTitle className="text-lg">Manufacturing</CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 <p className="text-[#757575] mb-4">
//                                     Source industrial equipment, machinery, and manufactured goods from trusted African
//                                     suppliers.
//                                 </p>
//                                 <Button className="w-full bg-[#008048] hover:bg-[#26A65C] text-white group-hover:bg-[#26A65C]">
//                                     Find Suppliers
//                                 </Button>
//                             </CardContent>
//                         </Card>

//                         {/* Category Card 3 */}
//                         <Card className="bg-white border-[#E0E0E0] hover:border-[#008048] hover:shadow-lg transition-all group">
//                             <CardHeader className="pb-4">
//                                 <Badge className="w-fit bg-[#00ACC1] text-white mb-3">Trending</Badge>
//                                 <div className="aspect-square bg-gradient-to-br from-[#E8F5E8] to-[#FFF3E0] rounded-lg flex items-center justify-center mb-4">
//                                     <Image
//                                         src="/placeholder.svg?height=200&width=200"
//                                         alt="Construction Category"
//                                         width={200}
//                                         height={200}
//                                         className="rounded-lg"
//                                     />
//                                 </div>
//                                 <div className="flex items-center mb-2">
//                                     <div className="flex text-[#FFB300]">
//                                         {[...Array(5)].map((_, i) => (
//                                             <Star key={i} className="h-4 w-4 fill-current" />
//                                         ))}
//                                     </div>
//                                     <span className="ml-2 text-sm text-[#757575]">4.7 (654 suppliers)</span>
//                                 </div>
//                                 <CardTitle className="text-lg">Construction</CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 <p className="text-[#757575] mb-4">
//                                     Find building materials, construction equipment, and infrastructure supplies across
//                                     Africa.
//                                 </p>
//                                 <Button className="w-full bg-[#008048] hover:bg-[#26A65C] text-white group-hover:bg-[#26A65C]">
//                                     Find Suppliers
//                                 </Button>
//                             </CardContent>
//                         </Card>

//                         {/* Category Card 4 */}
//                         <Card className="bg-white border-[#E0E0E0] hover:border-[#008048] hover:shadow-lg transition-all group">
//                             <CardHeader className="pb-4">
//                                 <Badge className="w-fit bg-[#7B1FA2] text-white mb-3">Verified</Badge>
//                                 <div className="aspect-square bg-gradient-to-br from-[#E8F5E8] to-[#FFF3E0] rounded-lg flex items-center justify-center mb-4">
//                                     <Image
//                                         src="/placeholder.svg?height=200&width=200"
//                                         alt="Consumer Goods Category"
//                                         width={200}
//                                         height={200}
//                                         className="rounded-lg"
//                                     />
//                                 </div>
//                                 <div className="flex items-center mb-2">
//                                     <div className="flex text-[#FFB300]">
//                                         {[...Array(5)].map((_, i) => (
//                                             <Star key={i} className="h-4 w-4 fill-current" />
//                                         ))}
//                                     </div>
//                                     <span className="ml-2 text-sm text-[#757575]">4.8 (1,156 suppliers)</span>
//                                 </div>
//                                 <CardTitle className="text-lg">Consumer Goods</CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 <p className="text-[#757575] mb-4">
//                                     Source textiles, electronics, household goods, and consumer products from African
//                                     manufacturers.
//                                 </p>
//                                 <Button className="w-full bg-[#008048] hover:bg-[#26A65C] text-white group-hover:bg-[#26A65C]">
//                                     Find Suppliers
//                                 </Button>
//                             </CardContent>
//                         </Card>
//                     </div>

//                     <div className="text-center mt-12">
//                         <Button
//                             size="lg"
//                             variant="outline"
//                             className="border-[#008048] text-[#008048] hover:bg-[#E8F5E8] bg-transparent"
//                         >
//                             View All Categories
//                             <ArrowRight className="ml-2 h-5 w-5" />
//                         </Button>
//                     </div>
//                 </div>
//             </section>

//             {/* Value Proposition #1 - Social Proof Section */}
//             <section className="py-20">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid lg:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <Badge className="mb-6 bg-[#008048] text-white">🛡️ Trust & Security</Badge>
//                             <h2 className="text-3xl lg:text-4xl font-bold text-[#212121] mb-6">
//                                 Trade with Complete Confidence
//                                 <span className="text-[#008048]"> Across Africa</span>
//                             </h2>
//                             <p className="text-xl text-[#757575] mb-8">
//                                 Our comprehensive KYC verification, escrow protection, and multi-currency support
//                                 eliminates the risks of cross-border B2B trade, giving you peace of mind with every
//                                 transaction.
//                             </p>

//                             <div className="grid md:grid-cols-2 gap-6 mb-8">
//                                 <div className="flex items-start">
//                                     <div className="w-12 h-12 bg-[#E8F5E8] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
//                                         <Shield className="h-6 w-6 text-[#008048]" />
//                                     </div>
//                                     <div>
//                                         <h3 className="font-semibold text-[#212121] mb-2">KYC Verification</h3>
//                                         <p className="text-[#757575] text-sm">
//                                             Every supplier verified with business registration and identity documents
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-start">
//                                     <div className="w-12 h-12 bg-[#FFF3E0] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
//                                         <CreditCard className="h-6 w-6 text-[#F46233]" />
//                                     </div>
//                                     <div>
//                                         <h3 className="font-semibold text-[#212121] mb-2">Escrow Protection</h3>
//                                         <p className="text-[#757575] text-sm">
//                                             Funds held securely until delivery confirmation
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-start">
//                                     <div className="w-12 h-12 bg-[#E8F5E8] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
//                                         <Globe className="h-6 w-6 text-[#008048]" />
//                                     </div>
//                                     <div>
//                                         <h3 className="font-semibold text-[#212121] mb-2">Multi-Currency</h3>
//                                         <p className="text-[#757575] text-sm">
//                                             Support for 30+ African currencies with real-time rates
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-start">
//                                     <div className="w-12 h-12 bg-[#FFF3E0] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
//                                         <Award className="h-6 w-6 text-[#F46233]" />
//                                     </div>
//                                     <div>
//                                         <h3 className="font-semibold text-[#212121] mb-2">Trust Scoring</h3>
//                                         <p className="text-[#757575] text-sm">
//                                             AI-powered trust metrics for supplier reliability
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <Button size="lg" className="bg-[#008048] hover:bg-[#26A65C] text-white">
//                                 Start Secure Trading
//                                 <ArrowRight className="ml-2 h-5 w-5" />
//                             </Button>
//                         </div>

//                         <div className="relative">
//                             <div className="bg-white rounded-2xl shadow-2xl p-8">
//                                 <Image
//                                     src="/placeholder.svg?height=400&width=500"
//                                     alt="Security Features"
//                                     width={500}
//                                     height={400}
//                                     className="rounded-xl w-full"
//                                 />
//                             </div>

//                             {/* Testimonial Cards */}
//                             <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-[#E0E0E0] max-w-xs">
//                                 <div className="flex items-center mb-2">
//                                     <div className="w-10 h-10 bg-[#008048] rounded-full flex items-center justify-center mr-3">
//                                         <span className="text-white font-semibold text-sm">KM</span>
//                                     </div>
//                                     <div>
//                                         <div className="font-semibold text-[#212121] text-sm">Kwame Mensah</div>
//                                         <div className="text-[#757575] text-xs">Ghana Exports Ltd</div>
//                                     </div>
//                                 </div>
//                                 <div className="flex text-[#FFB300] mb-2">
//                                     {[...Array(5)].map((_, i) => (
//                                         <Star key={i} className="h-3 w-3 fill-current" />
//                                     ))}
//                                 </div>
//                                 <p className="text-[#757575] text-xs">
//                                     "Escrow protection gave us confidence to trade with new suppliers across Africa."
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Value Proposition #2 - How It Works */}
//             <section id="how-it-works" className="py-20 bg-[#E8F5E8]">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid lg:grid-cols-2 gap-12 items-center">
//                         <div className="order-2 lg:order-1">
//                             <div className="relative">
//                                 <Image
//                                     src="/placeholder.svg?height=500&width=600"
//                                     alt="RFQ System"
//                                     width={600}
//                                     height={500}
//                                     className="rounded-2xl shadow-2xl"
//                                 />

//                                 {/* Floating UI Elements */}
//                                 <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-[#E0E0E0]">
//                                     <div className="flex items-center">
//                                         <MessageSquare className="h-5 w-5 text-[#008048] mr-2" />
//                                         <span className="text-sm font-semibold text-[#212121]">Live Chat</span>
//                                     </div>
//                                 </div>
//                                 <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-[#E0E0E0]">
//                                     <div className="flex items-center">
//                                         <TrendingUp className="h-5 w-5 text-[#F46233] mr-2" />
//                                         <span className="text-sm font-semibold text-[#212121]">Real-time Quotes</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="order-1 lg:order-2">
//                             <Badge className="mb-6 bg-[#F46233] text-white">🚀 Smart Negotiation</Badge>
//                             <h2 className="text-3xl lg:text-4xl font-bold text-[#212121] mb-6">
//                                 Get the Best Deals with
//                                 <span className="text-[#F46233]"> Smart RFQ System</span>
//                             </h2>
//                             <p className="text-xl text-[#757575] mb-8">
//                                 Our Request for Quote system lets you broadcast your needs to multiple verified
//                                 suppliers, compare offers in real-time, and negotiate the best terms - all in one
//                                 platform.
//                             </p>

//                             <div className="space-y-6 mb-8">
//                                 <div className="flex items-start">
//                                     <div className="w-8 h-8 bg-[#F46233] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
//                                         <span className="text-white font-bold text-sm">1</span>
//                                     </div>
//                                     <div>
//                                         <h3 className="font-semibold text-[#212121] mb-2">Broadcast Your RFQ</h3>
//                                         <p className="text-[#757575]">
//                                             Send your requirements to multiple verified suppliers simultaneously
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-start">
//                                     <div className="w-8 h-8 bg-[#F46233] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
//                                         <span className="text-white font-bold text-sm">2</span>
//                                     </div>
//                                     <div>
//                                         <h3 className="font-semibold text-[#212121] mb-2">Compare Quotes</h3>
//                                         <p className="text-[#757575]">
//                                             Review and compare offers side-by-side with detailed specifications
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-start">
//                                     <div className="w-8 h-8 bg-[#F46233] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
//                                         <span className="text-white font-bold text-sm">3</span>
//                                     </div>
//                                     <div>
//                                         <h3 className="font-semibold text-[#212121] mb-2">Negotiate & Close</h3>
//                                         <p className="text-[#757575]">
//                                             Use real-time chat to negotiate terms and finalize agreements
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <Button size="lg" className="bg-[#F46233] hover:bg-[#FF8A65] text-white">
//                                 Send Your First RFQ
//                                 <ArrowRight className="ml-2 h-5 w-5" />
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Value Proposition #3 - Benefits */}
//             <section className="py-20">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid lg:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <Badge className="mb-6 bg-[#00ACC1] text-white">📈 Business Growth</Badge>
//                             <h2 className="text-3xl lg:text-4xl font-bold text-[#212121] mb-6">
//                                 Expand Your Business
//                                 <span className="text-[#00ACC1]"> Across 54 Countries</span>
//                             </h2>
//                             <p className="text-xl text-[#757575] mb-8">
//                                 Break geographical barriers and tap into Africa's $3.4 trillion economy. Our platform
//                                 provides everything you need to scale your business across the continent.
//                             </p>

//                             <div className="grid md:grid-cols-2 gap-6 mb-8">
//                                 <div>
//                                     <h3 className="font-semibold text-[#212121] mb-3 flex items-center">
//                                         <MapPin className="h-5 w-5 text-[#00ACC1] mr-2" />
//                                         Market Access
//                                     </h3>
//                                     <p className="text-[#757575] text-sm">
//                                         Reach new markets and customers across all African countries
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <h3 className="font-semibold text-[#212121] mb-3 flex items-center">
//                                         <Clock className="h-5 w-5 text-[#00ACC1] mr-2" />
//                                         Faster Transactions
//                                     </h3>
//                                     <p className="text-[#757575] text-sm">
//                                         Reduce transaction time from weeks to days with digital processes
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <h3 className="font-semibold text-[#212121] mb-3 flex items-center">
//                                         <TrendingUp className="h-5 w-5 text-[#00ACC1] mr-2" />
//                                         Cost Reduction
//                                     </h3>
//                                     <p className="text-[#757575] text-sm">
//                                         Lower procurement costs by 15-30% through competitive bidding
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <h3 className="font-semibold text-[#212121] mb-3 flex items-center">
//                                         <Users className="h-5 w-5 text-[#00ACC1] mr-2" />
//                                         Network Growth
//                                     </h3>
//                                     <p className="text-[#757575] text-sm">
//                                         Build lasting relationships with verified African businesses
//                                     </p>
//                                 </div>
//                             </div>

//                             <Button size="lg" className="bg-[#00ACC1] hover:bg-[#0097A7] text-white">
//                                 Explore Markets
//                                 <ArrowRight className="ml-2 h-5 w-5" />
//                             </Button>
//                         </div>

//                         <div className="relative">
//                             <Image
//                                 src="/placeholder.svg?height=500&width=600"
//                                 alt="African Market Expansion"
//                                 width={600}
//                                 height={500}
//                                 className="rounded-2xl shadow-2xl"
//                             />

//                             {/* Stats Overlay */}
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end p-8">
//                                 <div className="text-white">
//                                     <div className="grid grid-cols-3 gap-6">
//                                         <div>
//                                             <div className="text-2xl font-bold">$3.4T</div>
//                                             <div className="text-sm opacity-90">African GDP</div>
//                                         </div>
//                                         <div>
//                                             <div className="text-2xl font-bold">1.3B</div>
//                                             <div className="text-sm opacity-90">Population</div>
//                                         </div>
//                                         <div>
//                                             <div className="text-2xl font-bold">54</div>
//                                             <div className="text-sm opacity-90">Countries</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Money Back Guarantee Section */}
//             <section className="py-16 bg-gradient-to-r from-[#008048] to-[#26A65C]">
//                 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                     <div className="flex justify-center mb-6">
//                         <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
//                             <Shield className="h-10 w-10 text-[#008048]" />
//                         </div>
//                     </div>
//                     <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">100% Money Back Guarantee</h2>
//                     <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//                         We're so confident in our platform that we offer a full money-back guarantee. If you're not
//                         satisfied with your trading experience in the first 30 days, we'll refund your fees completely.
//                     </p>
//                     <Button size="lg" className="bg-white text-[#008048] hover:bg-gray-100 px-8 py-4 text-lg">
//                         Start Risk-Free Trading
//                         <ArrowRight className="ml-2 h-5 w-5" />
//                     </Button>
//                 </div>
//             </section>

//             {/* FAQ Section */}
//             <section className="py-20 bg-[#FAFAFA]">
//                 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl lg:text-4xl font-bold text-[#212121] mb-6">
//                             Frequently Asked Questions
//                         </h2>
//                         <p className="text-xl text-[#757575]">
//                             Get answers to common questions about trading on Trade Afrika
//                         </p>
//                     </div>

//                     <div className="grid lg:grid-cols-2 gap-12 items-start">
//                         <div>
//                             <Image
//                                 src="/placeholder.svg?height=400&width=500"
//                                 alt="FAQ Support"
//                                 width={500}
//                                 height={400}
//                                 className="rounded-2xl shadow-lg"
//                             />
//                         </div>

//                         <div>
//                             <Accordion type="single" collapsible className="space-y-4">
//                                 <AccordionItem
//                                     value="item-1"
//                                     className="bg-white rounded-lg border border-[#E0E0E0] px-6"
//                                 >
//                                     <AccordionTrigger className="text-left font-semibold text-[#212121] hover:text-[#008048]">
//                                         How does the KYC verification process work?
//                                     </AccordionTrigger>
//                                     <AccordionContent className="text-[#757575]">
//                                         Our KYC process involves uploading business registration documents, tax
//                                         certificates, and identity verification. We use Smile ID for automated document
//                                         verification, and most verifications are completed within 24-48 hours.
//                                     </AccordionContent>
//                                 </AccordionItem>

//                                 <AccordionItem
//                                     value="item-2"
//                                     className="bg-white rounded-lg border border-[#E0E0E0] px-6"
//                                 >
//                                     <AccordionTrigger className="text-left font-semibold text-[#212121] hover:text-[#008048]">
//                                         What payment methods are supported?
//                                     </AccordionTrigger>
//                                     <AccordionContent className="text-[#757575]">
//                                         We support multiple payment gateways including Paystack, Flutterwave, M-Pesa,
//                                         and PAPSS. Our platform handles 30+ African currencies with real-time conversion
//                                         rates and escrow protection.
//                                     </AccordionContent>
//                                 </AccordionItem>

//                                 <AccordionItem
//                                     value="item-3"
//                                     className="bg-white rounded-lg border border-[#E0E0E0] px-6"
//                                 >
//                                     <AccordionTrigger className="text-left font-semibold text-[#212121] hover:text-[#008048]">
//                                         How does the escrow system protect my payments?
//                                     </AccordionTrigger>
//                                     <AccordionContent className="text-[#757575]">
//                                         Funds are held securely in escrow until you confirm delivery and satisfaction
//                                         with the goods or services. This protects both buyers and sellers, ensuring fair
//                                         transactions across borders.
//                                     </AccordionContent>
//                                 </AccordionItem>

//                                 <AccordionItem
//                                     value="item-4"
//                                     className="bg-white rounded-lg border border-[#E0E0E0] px-6"
//                                 >
//                                     <AccordionTrigger className="text-left font-semibold text-[#212121] hover:text-[#008048]">
//                                         What are the fees for using Trade Afrika?
//                                     </AccordionTrigger>
//                                     <AccordionContent className="text-[#757575]">
//                                         We charge a small transaction fee only on successful trades (2-3% depending on
//                                         transaction size). Registration, browsing, and RFQ submissions are completely
//                                         free. No hidden fees or monthly subscriptions.
//                                     </AccordionContent>
//                                 </AccordionItem>
//                             </Accordion>

//                             <div className="mt-8 text-center">
//                                 <Button size="lg" className="bg-[#008048] hover:bg-[#26A65C] text-white">
//                                     Get Started Now
//                                     <ArrowRight className="ml-2 h-5 w-5" />
//                                 </Button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Additional Offers Section */}
//             <section className="py-20">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl lg:text-4xl font-bold text-[#212121] mb-6">
//                             Special Offers for African Businesses
//                         </h2>
//                         <p className="text-xl text-[#757575]">
//                             Take advantage of these limited-time offers to accelerate your business growth
//                         </p>
//                     </div>

//                     <div className="grid md:grid-cols-3 gap-8">
//                         {/* Offer 1 */}
//                         <Card className="bg-gradient-to-br from-[#E8F5E8] to-white border-[#008048] border-2 relative overflow-hidden">
//                             <div className="absolute top-4 right-4">
//                                 <Badge className="bg-[#4CAF50] text-white">Limited Time</Badge>
//                             </div>
//                             <CardHeader className="pb-4">
//                                 <div className="w-16 h-16 bg-[#008048] rounded-xl flex items-center justify-center mb-4">
//                                     <Building2 className="h-8 w-8 text-white" />
//                                 </div>
//                                 <CardTitle className="text-xl">Bulk Trading Program</CardTitle>
//                                 <CardDescription>
//                                     Special rates and dedicated support for high-volume traders and procurement
//                                     managers.
//                                 </CardDescription>
//                             </CardHeader>
//                             <CardContent>
//                                 <ul className="space-y-2 text-[#757575] mb-6">
//                                     <li className="flex items-center">
//                                         <CheckCircle className="h-4 w-4 text-[#008048] mr-2" />
//                                         Reduced transaction fees
//                                     </li>
//                                     <li className="flex items-center">
//                                         <CheckCircle className="h-4 w-4 text-[#008048] mr-2" />
//                                         Priority customer support
//                                     </li>
//                                     <li className="flex items-center">
//                                         <CheckCircle className="h-4 w-4 text-[#008048] mr-2" />
//                                         Dedicated account manager
//                                     </li>
//                                 </ul>
//                                 <Button className="w-full bg-[#008048] hover:bg-[#26A65C] text-white">Apply Now</Button>
//                             </CardContent>
//                         </Card>

//                         {/* Offer 2 */}
//                         <Card className="bg-gradient-to-br from-[#FFF3E0] to-white border-[#F46233] border-2 relative overflow-hidden">
//                             <div className="absolute top-4 right-4">
//                                 <Badge className="bg-[#F46233] text-white">New Users</Badge>
//                             </div>
//                             <CardHeader className="pb-4">
//                                 <div className="w-16 h-16 bg-[#F46233] rounded-xl flex items-center justify-center mb-4">
//                                     <Award className="h-8 w-8 text-white" />
//                                 </div>
//                                 <CardTitle className="text-xl">Startup Accelerator</CardTitle>
//                                 <CardDescription>
//                                     Free premium features for 6 months for qualifying startups and small businesses.
//                                 </CardDescription>
//                             </CardHeader>
//                             <CardContent>
//                                 <ul className="space-y-2 text-[#757575] mb-6">
//                                     <li className="flex items-center">
//                                         <CheckCircle className="h-4 w-4 text-[#F46233] mr-2" />
//                                         Free premium listing
//                                     </li>
//                                     <li className="flex items-center">
//                                         <CheckCircle className="h-4 w-4 text-[#F46233] mr-2" />
//                                         Enhanced visibility
//                                     </li>
//                                     <li className="flex items-center">
//                                         <CheckCircle className="h-4 w-4 text-[#F46233] mr-2" />
//                                         Business mentorship
//                                     </li>
//                                 </ul>
//                                 <Button className="w-full bg-[#F46233] hover:bg-[#FF8A65] text-white">
//                                     Qualify Now
//                                 </Button>
//                             </CardContent>
//                         </Card>

//                         {/* Offer 3 */}
//                         <Card className="bg-gradient-to-br from-[#E0F7FA] to-white border-[#00ACC1] border-2 relative overflow-hidden">
//                             <div className="absolute top-4 right-4">
//                                 <Badge className="bg-[#00ACC1] text-white">Partnership</Badge>
//                             </div>
//                             <CardHeader className="pb-4">
//                                 <div className="w-16 h-16 bg-[#00ACC1] rounded-xl flex items-center justify-center mb-4">
//                                     <Users className="h-8 w-8 text-white" />
//                                 </div>
//                                 <CardTitle className="text-xl">Referral Rewards</CardTitle>
//                                 <CardDescription>
//                                     Earn rewards for every business you refer to Trade Afrika. Build your network and
//                                     earn together.
//                                 </CardDescription>
//                             </CardHeader>
//                             <CardContent>
//                                 <ul className="space-y-2 text-[#757575] mb-6">
//                                     <li className="flex items-center">
//                                         <CheckCircle className="h-4 w-4 text-[#00ACC1] mr-2" />
//                                         Cash rewards per referral
//                                     </li>
//                                     <li className="flex items-center">
//                                         <CheckCircle className="h-4 w-4 text-[#00ACC1] mr-2" />
//                                         Bonus for active referrals
//                                     </li>
//                                     <li className="flex items-center">
//                                         <CheckCircle className="h-4 w-4 text-[#00ACC1] mr-2" />
//                                         Exclusive partner benefits
//                                     </li>
//                                 </ul>
//                                 <Button className="w-full bg-[#00ACC1] hover:bg-[#0097A7] text-white">
//                                     Start Referring
//                                 </Button>
//                             </CardContent>
//                         </Card>
//                     </div>
//                 </div>
//             </section>

//             {/* Final CTA Section */}
//             <section className="relative py-20 bg-gradient-to-r from-[#008048] via-[#26A65C] to-[#008048] overflow-hidden">
//                 <div className="absolute inset-0 bg-black/20"></div>
//                 <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                     <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//                         Ready to Transform Your African Business Trade?
//                     </h2>
//                     <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//                         Join thousands of African businesses already trading securely and efficiently. Start your
//                         journey to cross-border success today.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
//                         <Button size="lg" className="bg-white text-[#008048] hover:bg-gray-100 px-8 py-4 text-lg">
//                             Start Trading Today
//                             <ArrowRight className="ml-2 h-5 w-5" />
//                         </Button>
//                         <Button
//                             size="lg"
//                             variant="outline"
//                             className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
//                         >
//                             Schedule Demo Call
//                         </Button>
//                     </div>
//                     <div className="flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm">
//                         <div className="flex items-center">
//                             <CheckCircle className="h-4 w-4 mr-2" />
//                             Free registration
//                         </div>
//                         <div className="flex items-center">
//                             <CheckCircle className="h-4 w-4 mr-2" />
//                             No setup fees
//                         </div>
//                         <div className="flex items-center">
//                             <CheckCircle className="h-4 w-4 mr-2" />
//                             30-day money back guarantee
//                         </div>
//                         <div className="flex items-center">
//                             <CheckCircle className="h-4 w-4 mr-2" />
//                             24/7 support
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="bg-[#212121] text-white py-16">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid md:grid-cols-5 gap-8">
//                         <div className="md:col-span-2">
//                             <div className="flex items-center mb-6">
//                                 <div className="w-10 h-10 bg-[#008048] rounded-xl flex items-center justify-center">
//                                     <span className="text-white font-bold text-xl">T</span>
//                                 </div>
//                                 <span className="ml-3 text-2xl font-bold">Trade Afrika</span>
//                             </div>
//                             <p className="text-gray-400 mb-6 max-w-md">
//                                 Transforming intra-African trade through secure, efficient B2B commerce. Connecting
//                                 businesses across 54 countries with trust and innovation.
//                             </p>
//                             <div className="flex space-x-4">
//                                 <div className="w-10 h-10 bg-[#008048] rounded-lg flex items-center justify-center hover:bg-[#26A65C] transition-colors cursor-pointer">
//                                     <span className="text-white text-sm">f</span>
//                                 </div>
//                                 <div className="w-10 h-10 bg-[#008048] rounded-lg flex items-center justify-center hover:bg-[#26A65C] transition-colors cursor-pointer">
//                                     <span className="text-white text-sm">t</span>
//                                 </div>
//                                 <div className="w-10 h-10 bg-[#008048] rounded-lg flex items-center justify-center hover:bg-[#26A65C] transition-colors cursor-pointer">
//                                     <span className="text-white text-sm">in</span>
//                                 </div>
//                                 <div className="w-10 h-10 bg-[#008048] rounded-lg flex items-center justify-center hover:bg-[#26A65C] transition-colors cursor-pointer">
//                                     <span className="text-white text-sm">ig</span>
//                                 </div>
//                             </div>
//                         </div>

//                         <div>
//                             <h3 className="font-semibold mb-6 text-lg">Platform</h3>
//                             <ul className="space-y-3 text-gray-400">
//                                 <li>
//                                     <Link href="#" className="hover:text-white transition-colors">
//                                         Find Suppliers
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="hover:text-white transition-colors">
//                                         List Products
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="hover:text-white transition-colors">
//                                         RFQ System
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="hover:text-white transition-colors">
//                                         Escrow Services
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="hover:text-white transition-colors">
//                                         Mobile App
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>

//                         <div>
//                             <h3 className="font-semibold mb-6 text-lg">Support</h3>
//                             <ul className="space-y-3 text-gray-400">
//                                 <li>
//                                     <Link href="#" className="hover:text-white transition-colors">
//                                         Help Center
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="hover:text-white transition-colors">
//                                         Documentation
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="hover:text-white transition-colors">
//                                         API Reference
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="hover:text-white transition-colors">
//                                         Contact Support
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="hover:text-white transition-colors">
//                                         System Status
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>

//                         <div>
//                             <h3 className="font-semibold mb-6 text-lg">Company</h3>
//                             <ul className="space-y-3 text-gray-400">
//                                 <li>
//                                     <Link href="#" className="hover:text-white transition-colors">
//                                         About Us
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="hover:text-white transition-colors">
//                                         Blog
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="hover:text-white transition-colors">
//                                         Careers
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="hover:text-white transition-colors">
//                                         Press Kit
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#" className="hover:text-white transition-colors">
//                                         Partners
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>

//                     <div className="border-t border-gray-800 mt-12 pt-8">
//                         <div className="flex flex-col md:flex-row justify-between items-center">
//                             <p className="text-gray-400 text-sm mb-4 md:mb-0">
//                                 © 2024 Trade Afrika. All rights reserved. Empowering African businesses since 2024.
//                             </p>
//                             <div className="flex flex-wrap justify-center gap-6">
//                                 <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
//                                     Privacy Policy
//                                 </Link>
//                                 <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
//                                     Terms of Service
//                                 </Link>
//                                 <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
//                                     Cookie Policy
//                                 </Link>
//                                 <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
//                                     GDPR Compliance
//                                 </Link>
//                             </div>
//                         </div>

//                         <div className="mt-6 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
//                             <div className="flex items-center mb-4 md:mb-0">
//                                 <Phone className="h-4 w-4 mr-2" />
//                                 <span>+234 (0) 123 456 7890</span>
//                                 <Mail className="h-4 w-4 ml-6 mr-2" />
//                                 <span>hello@tradeafrika.com</span>
//                             </div>
//                             <div className="flex items-center">
//                                 <MapPin className="h-4 w-4 mr-2" />
//                                 <span>Lagos, Nigeria • Nairobi, Kenya • Cape Town, South Africa</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     )
// }
