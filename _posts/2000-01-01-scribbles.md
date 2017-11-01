---

title: MySpace Pictures
description: Scribbles in my early 20s. Often posted on MySpace.
featured: true
undated: true
tags: doodles
permalink: /myspace-pictures

---

When I had a MySpace blog (so a long time ago now) I liked doodling little pictures and comics in Microsoft Paint and later Adobe Illustrator. I usually don't mention them but might as well put them up here for fun. Haven't done this sort of thing for probably 20 years or more at the time of writing this blurb in 2017.

{% for image in site.static_files %}
    {% if image.path contains 'scribbles' %}

<img src="{{site.baseurl}}{{image.path}}" alt="image" />

    {% endif %}
{% endfor %}
