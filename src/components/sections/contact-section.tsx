'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Github, Send, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { SectionNavigator } from '../shared/section-navigator';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

type HistoryItem = {
  id: number;
  command: string;
  output: React.ReactNode;
};

export function ContactSection() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [lastLoginDate, setLastLoginDate] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    setLastLoginDate(new Date().toString());
    inputRef.current?.focus();
  }, []);

  const handleFormInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleMessageSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!WEB3FORMS_ACCESS_KEY) {
      toast.error('Configuration Error', {
        description:
          'Please replace the placeholder Web3Forms access key in the contact section component.',
      });
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading('Sending your message...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: 'DTC-Portfolio Contact Form',
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Message Sent!', {
          id: toastId,
          description: "Thanks for reaching out. I'll get back to you shortly.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(`Error: ${result.message}`, {
          id: toastId,
          description:
            'There was an issue sending your message. Please try again.',
        });
      }
    } catch (error) {
      toast.error('Network Error', {
        id: toastId,
        description:
          'Could not connect to the server. Please check your connection.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... (The rest of the file is the same, no changes needed below this line)

  const commands: { [key: string]: () => React.ReactNode } = {
    help: () => (
      <div className="space-y-1">
        <p>Available commands:</p>
        <ul className="list-disc list-inside pl-2">
          <li>
            <span className="text-green-400">socials</span> - Display social
            media links
          </li>
          <li>
            <span className="text-green-400">email</span> - Show my email
            address
          </li>
          <li>
            <span className="text-green-400">message</span> - Open the contact
            form
          </li>
          <li>
            <span className="text-green-400">clear</span> - Clear the terminal
          </li>
          <li>
            <span className="text-green-400">cat</span> - ???
          </li>
          <li>
            <span className="text-green-400">help</span> - Show this help
            message
          </li>
        </ul>
      </div>
    ),
    socials: () => (
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="https://github.com/DTcode22"
          target="_blank"
          className="flex items-center gap-2 hover:text-green-300 transition-colors"
        >
          <Github className="w-5 h-5" /> GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/dejan-turuntas/"
          target="_blank"
          className="flex items-center gap-2 hover:text-green-300 transition-colors"
        >
          <Linkedin className="w-5 h-5" /> LinkedIn
        </Link>
      </div>
    ),
    email: () => (
      <Link
        href="mailto:dejant999@gmail.com"
        className="flex items-center gap-2 hover:text-green-300 transition-colors"
      >
        <Mail className="w-5 h-5" /> dejant999@gmail.com
      </Link>
    ),
    message: () => {
      if (showForm) {
        return 'The message form is already open. No need to ask twice!';
      }
      setTimeout(() => {
        setShowForm(true);
        window.dispatchEvent(new CustomEvent('showDirectMessageLink'));
        setTimeout(() => {
          const formElement = document.getElementById('message-form');
          formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
      }, 100);

      return 'Initializing message form... Stand by.';
    },
    clear: () => {
      setHistory([]);
      return 'Terminal cleared.';
    },
    cat: () => (
      <pre className="font-mono text-green-300 text-xs">
        {`

      \\\`*-.
       )  _\`-.
      .  : \`. .
      : _   '  \\
      ; *\` _.   \`*-._
      \`-.-'          \`-.
        ;       \`       \`.
        :.       .        \\
        . \\  .   :   .-'   .
        '  \`+.;  ;  '      :
        :  '  |    ;       ;-.
        ; '   : :\`-:     _. \`* ;
     .*' /  .*' ; .* \` - +'  \`*'
     \`*-*   \`*-*  \`*-*'
`}
      </pre>
    ),
    exit: () => (
      <pre className="text-green-300">{`
        ████████████████████████████████████████████
        ██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██
        ██▓▓╔══════════════════════════════════╗▓▓██
        ██▓▓║  E V E N T   H O R I Z O N       ║▓▓██
        ██▓▓║      C R O S S E D               ║▓▓██
        ██▓▓╚══════════════════════════════════╝▓▓██
        ██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██
        ████████████████████████████████████████████
        `}</pre>
    ),
  };

  const processCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const output = commands[trimmedCmd]
      ? commands[trimmedCmd]()
      : `Command not found: '${cmd}'. Type 'help' for a list of commands.`;

    setHistory((prev) => [...prev, { id: Date.now(), command: cmd, output }]);
  };

  const handleTerminalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === '') return;
    processCommand(input);
    setInput('');
  };

  return (
    <div className="space-y-24 pb-16">
      {/* Header */}
      <section id="contact-intro" className="scroll-mt-20 space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold">
            <code>Contact</code>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Type{' '}
            <code className="bg-muted px-1.5 py-0.5 rounded-md text-base">
              help
            </code>{' '}
            to get started.
          </p>
        </div>
      </section>

      {/* Interactive Terminal */}
      <section id="interactive-terminal" className="scroll-mt-20 space-y-8">
        <Card className="bg-black/80 backdrop-blur-sm border-green-500/30 text-white font-mono shadow-2xl shadow-primary/10">
          <CardHeader className="flex flex-row items-center justify-between p-3 border-b border-green-500/20">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-green-400" />
              <CardTitle className="text-base text-white font-normal">
                /bin/contact
              </CardTitle>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </CardHeader>
          <CardContent
            ref={terminalRef}
            className="p-4 h-96 overflow-y-auto"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="space-y-4 text-sm">
              <p>Welcome to my interactive contact terminal.</p>
              {lastLoginDate && <p>Last login: {lastLoginDate}</p>}
              <p>
                Type <span className="text-green-400">'help'</span> for a list
                of available commands.
              </p>
              {history.map((item) => (
                <div key={item.id}>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">~ $</span>
                    <span>{item.command}</span>
                  </div>
                  <div className="pl-2">{item.output}</div>
                </div>
              ))}
              <form
                onSubmit={handleTerminalSubmit}
                className="flex items-center gap-2"
              >
                <label
                  htmlFor="terminal-input"
                  className="text-green-400 flex w-10"
                >
                  ~ $
                </label>
                <input
                  ref={inputRef}
                  id="terminal-input"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  autoComplete="off"
                  className="bg-transparent border-none text-white focus:ring-0 w-full p-0 pl-2"
                />
              </form>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact Form - Conditionally Rendered */}
      <section id="message-form" className="scroll-mt-20">
        <div
          className={cn(
            'transition-all duration-700 ease-in-out',
            showForm
              ? 'max-h-[1000px] opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          )}
        >
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">
              Send a Direct Message
            </h2>
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Let&apos;s Start a Conversation</CardTitle>
                  <CardDescription>
                    Fill out the form below and I&apos;ll get back to you as
                    soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleMessageSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleFormInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleFormInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleFormInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project or just say hello!"
                        rows={6}
                        value={formData.message}
                        onChange={handleFormInputChange}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <SectionNavigator currentSection="contact" id="navigation" />
    </div>
  );
}
