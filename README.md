# jeu-de-pistes-musicales

## Installation (Mac/Linux, sorry Windows)

We're going to use Flask (python based) for the web framework. You'll need pip3.

Mac:
```shell
$ brew install python3
```

Linux:
```shell
$ sudo apt-get install python3-pip
```

Let's use virtualenv to create a virtual environment for the project.

```shell
$ sudo pip3 install virtualenv
```

Once the above is ready, go ahead and clone this repo and create the environment inside:

```shell
$ git clone https://github.com/ndvibes/jeu-de-pistes-musicales.git
$ cd jeu-de-pistes-musicales/
$ virtualenv venv -p /usr/bin/pip3
```

Activate the environment (don't forget the dot):

```shell
$ . venv/bin/activate
```

If you want to leave the env (anywhere):

```shell
(venv) $ deactivate
```

Install all the dependencies with one command. (Here pip == pip3 in the virtual environment.)

```shell
(venv) $ pip install -r requirements.txt
```

## Fun part

Go ahead and run the flask server and go to http://localhost:5000/

```shell
(venv) $ python hello.py
```

There's enough boilerplate in the templates and static folder for you to guess how to include other static files.

Have fun !
