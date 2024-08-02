import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "What is this blog about?",
    answer:
      "This blog covers a wide range of topics including technology, lifestyle, travel, and wellness. Our goal is to provide insightful and valuable content for our readers.",
  },
  {
    id: "item-2",
    question: "How often do you post new content?",
    answer:
      "We post new content weekly. Make sure to subscribe to our newsletter to get the latest updates directly in your inbox.",
  },
  {
    id: "item-3",
    question: "How can I subscribe to the newsletter?",
    answer:
      "You can subscribe to our newsletter by entering your email address in the subscription form located in the footer of our website.",
  },
];

const FAQBanner = () => {
  return (
    <div className="p-10">
      <Accordion
        type="single"
        collapsible
        className="w-full mx-auto max-w-[50rem] "
      >
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQBanner;
