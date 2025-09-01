import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real implementation, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 quantum-dots opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text reality-bend">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative data science projects? Let's discuss how advanced analytics and machine learning can transform your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-6 quantum-glow">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start space-x-4 group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors quantum-pulse">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">ajay.miryala@email.com</div>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-4 group">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors quantum-pulse">
                    <Linkedin className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <a 
                      href="https://www.linkedin.com/in/ajay-sai/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      linkedin.com/in/ajay-sai
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-4 group">
                  <div className="w-12 h-12 bg-foreground/20 rounded-full flex items-center justify-center group-hover:bg-foreground/30 transition-colors quantum-pulse">
                    <Github className="text-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold">GitHub</div>
                    <a 
                      href="https://github.com/ajay-sai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      github.com/ajay-sai
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="quantum-card p-8 rounded-xl shadow-lg consciousness-expand">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-muted-foreground mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="bg-secondary border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-muted-foreground mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-secondary border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium text-muted-foreground mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or how we can collaborate..."
                  required
                  className="bg-secondary border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
