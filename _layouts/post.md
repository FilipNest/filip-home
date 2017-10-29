{% include header.html %}

<main class="post">

<h1>{{page.title}}<span class="bullet">.</span></h1>

{% if page.image %}
<img class="post-image" src="{{page.image}}"/>
{% endif %}

{{content}}

<div class="tags">
Tagged with:
{% for tag in page.tags %}
<a class="tag" href="/tag/{{tag}}">{{tag}}</a>
{% endfor %}
</div>

</main>

{% include footer.html %}
