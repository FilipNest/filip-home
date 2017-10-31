{% include header.html %}

<main class="post">

<h1 class="main">{{page.title}}<span class="bullet">.</span></h1>
{% unless page.undated %}<span class="date">{{ page.date | date: "%b %d, %Y" }}</span>{% endunless %}

{% unless page.album %}

  {% if page.image %}
    <img class="post-image" src="{{page.image}}"/>
  {% endif %}

{% endunless %}

{{content}}

{% if page.album %}

  {% assign a = '/albums/' %}
  {% assign b = a | append: page.album %}
  {% assign c = b | append: '/index.html' %}

  {% include {{c}} %}

{% endif %}

<div class="tags">
Tagged with:
{% for tag in page.tags %}
<a class="tag" href="/tag/{{tag}}">{{tag}}</a>
{% endfor %}
</div>

</main>

{% include footer.html %}
