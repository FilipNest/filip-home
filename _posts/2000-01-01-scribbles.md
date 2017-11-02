---

title: MySpace Pictures
description: Scribbles in my early 20s. Often posted on MySpace.
featured: true
undated: true
tags: doodles
permalink: /myspace-pictures

---

When I had a MySpace blog (so a long time ago now) I liked doodling little pictures and comics in Microsoft Paint and later Adobe Illustrator. I usually don't mention them but might as well put them up here for fun. Some of these are from a blogger blog a few years later. I think it's all 2005 and earlier. Haven't done this sort of thing for a while as of writing this in 2017.

{% for image in site.static_files %}
    {% if image.path contains 'scribbles' %}

<img src="{{site.baseurl}}{{image.path}}" alt="image" />

    {% endif %}
{% endfor %}
