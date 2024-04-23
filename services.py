import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import os as os
import dotenv
import openai as openai
from openai import OpenAI
from PIL import Image
import requests
from io import BytesIO
import json
from better_profanity import profanity




dotenv.load_dotenv()
client = OpenAI()

form_questions = {
    "name": None,  #name
    "age": None,  #age
    "partner type": None, #partner type
    "Do you want a twist in the story?": None, #feeling lucky
    "In the presence of confrontation how does you partner respond to another person": None, #q3
    "What trait must your ideal partner possess if you had to choose one?": None,#q4
    "What kind of challenges do you think make a romance interesting?": None,#
    "What is one characteristic people would say you have?": None,
    "I want my story have a partner that is different then me": None,
    "what genre is this story?": None,
    "This should be apart of the story in someway": None,
    "your partner job is": None,
    "time": None
}

context_list = ["You are writing a love story."]



def question_check(form_answers):

    if form_answers[2] =='Juliet' :
        form_answers[2] = 'Female'
    else:  
        form_answers[2] = "Male"
    
    if form_answers[4] == 'Feeling Lucky':
        form_answers[4] = 'Yes'
    else:
        form_answers[4] = 'No'
    
    if int(form_answers[-1]) < 10:
        print(form_answers[-1])
        form_answers[-1] = 'In a rush'
    elif int(form_answers[-1]) > 200:
        print(form_answers[-1])
        form_answers[-1] = 'In a hurry'
    else:
        form_answers.pop()

def generate_text(text, context, form_answers):
    question_check(form_answers)
    user_answers = ""
    for index, x in enumerate(form_questions.keys()):
        if index < len(form_answers)  :
            user_answers += x + " " + form_answers[index] + "\n"
        else:
            pass
    
    print("User answers:",user_answers)

    if  profanity.contains_profanity(user_answers) == True:
        return "Please avoid using inappropriate language"

    text = text + user_answers
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": context},
            {"role": "user", "content": text}
        ]
    )
    return response.choices[0].message.content


import base64
import requests
from PIL import Image
from io import BytesIO

def generate_image(text):
    response = client.images.generate(
        model="dall-e-3",
        prompt=text,
        size="1024x1024",
        quality="standard",
        n=1
    )
    image_url = response.data[0].url
    response = requests.get(image_url, stream=True)
    image = Image.open(BytesIO(response.content))

    buffered = BytesIO()
    image.save(buffered, format="JPEG")  
    img_str = base64.b64encode(buffered.getvalue()).decode('utf-8')

    return f"data:image/jpeg;base64,{img_str}"



