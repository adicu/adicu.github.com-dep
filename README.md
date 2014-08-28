adicu.github.com
================

The old ADI internet experience developed with [jekyll][1] and [GitHub Pages][2].

Site: [adicu.com][3]
Alternative Address: [adicu.github.com][4]

Installation
------------
1. Ruby - Jekyll requires the ruby language. If you've got a Mac, you've most likely already got Ruby. If you open up the terminal application, and run the command `ruby --version` you can confirm this. Your Ruby version should begin with 1.9.3 or 2.0.0. If you've got that, you're all set. Skip to step #2. Otherwise, follow these [instructions](https://www.ruby-lang.org/en/downloads/) to install Ruby.

2. Bundler - Bundler is a package manager that makes versioning Ruby software like Jekyll a heck of a lot easier and is highly recommended if you're going to be building GitHub Pages sites locally. If you don't already have Bunder installed, you can install it by running the command `gem install bundler` (use `sudo gem install bundler` if you get permission errors).

3. Jekyll - The main event. Simply run the command, `bundle install` and you're good to go (use `sudo bundle install` if you get permission errors).

3. Node.js - Run `npm`.  If you see a message that starts with `Usage: npm <command>` then you can skip this step. Go to [Node Download Page](http://nodejs.org/download/) and run the installer that's appropriate for your computer.

5. Grunt - run `npm install` and then `grunt` to concatenate and compile LESS. Use `grunt watch` to automatically update CSS files.

6. Run the server by executing `jekyll serve --watch` in the root directory of the site.

7. Visit `http://localhost:4000/` in ~~Internet Explorer~~ your browser.

For more installation instructions and information, check out [jekyll's installation page][5], or
this [Windows installation tutorial][6]. To learn more about jekyll, check out its [GitHub repo][7].

How to Post
-----------
1. Run `./newpost.sh title type` where `title` is the short title of your
   post (which will be used in the URL), and `type` is one of the template
   types in the \_templates directory.  The `title` should be lowercase words separated by dashes, and the `type` should be a `.md` file.
   ```
   # Examples
   ./newpost.sh my-cool-post blogpost.md
   ./newpost.sh a-great-resource resource.md
   ```

2. Fill out your post in the newly created file.
3. Commit and push the file to `origin/master`.

Event Resources
---------------
Events posted to Google Calendar should have the following format:

```
[short description]
-----------
[long description]
-----------
resource1 name-->resource1 link
resource2 name-->resource2 link
etc.
```
All of the resource links will be made available in a javascript object to implement features on the website. Resources currently used on the website are:
1. image-->image link | A cover image for the events slider. If this is not provided a default image will be used.
2. slides-->slides link | A link to presentation slides relevant to the event.


[1]: http://jekyllrb.com/
[2]: http://pages.github.com/
[3]: http://www.adicu.com/
[4]: http://adicu.github.com/
[5]: https://github.com/mojombo/jekyll/wiki/install
[6]: http://www.madhur.co.in/blog/2011/09/01/runningjekyllwindows.html
[7]: https://github.com/mojombo/jekyll
[8]: http://daringfireball.net/projects/markdown/basics
