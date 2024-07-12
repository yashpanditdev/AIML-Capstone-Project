import os
import torch
from transformers import BartForConditionalGeneration, BartTokenizer

class Summarizer:
    def __init__(self):
        model_dir = os.path.join(os.path.dirname(__file__), 'fine-tuned-bart')
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        self.tokenizer = BartTokenizer.from_pretrained(model_dir)
        self.model = BartForConditionalGeneration.from_pretrained(model_dir).to(self.device)

    def generate_summary(self, text):
        input_ids = self.tokenizer.encode(text, return_tensors='pt', max_length=512, truncation=True).to(self.device)
        summary_ids = self.model.generate(input_ids, max_length=150, min_length=40, length_penalty=2.0, num_beams=4, early_stopping=True)
        summary = self.tokenizer.decode(summary_ids[0], skip_special_tokens=True)
        return summary

# Initialize the summarizer
summarizer = Summarizer()
