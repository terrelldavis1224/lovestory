import flask
import services
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask import Flask

app = Flask(__name__)
limiter = Limiter(app=app, key_func=get_remote_address)

@app.route("/")
def index():
    return flask.render_template('index.html')


@app.route("/about")
def about():
    return flask.render_template('about.html')



@app.route("/quiz")
def quiz():
        return flask.render_template('quiz.html')



@app.route("/result", methods=['GET', 'POST'])
@limiter.limit("10 per hour") 
def result():
    if flask.request.method == 'POST':
        form_data = flask.request.form.to_dict()
        story = services.generate_text("Write a short love story about how and where I meet someone given the answers to this questionnaire", services.context_list[0], list(form_data.values()))

        if story == "Please avoid using inappropriate language":
            return flask.render_template('result.html', story=story, image=None)

        image = services.generate_image("a text-free image " + story)
        return flask.render_template('result.html', story=story, image=image)

    else:
        return flask.redirect("/quiz")
    
if __name__ == "__main__":
    app.run(debug=True)


@app.errorhandler(429)
def ratelimit_handler():
    return flask.render_template('error.html', message="You've exceeded the allowed number of requests. Please try again later."), 429
