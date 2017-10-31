{% include header.html %}

<main class="post">

<h1>"{{ page.tag }}"</h1>

{% assign posts = site.tags[page.tag] %}
<ul>
{% for post in posts %}

  <li><a href="{{post.url}}">{{ post.title }}</a></li>

{% endfor %}
</ul>

</main>

{% include footer.html %}
