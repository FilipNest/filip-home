{% include header.html %}
  <main>
    <h1>Hullo<span class="bullet">.</span></h1>
    <section class="striped-border block narrow-block">
      {{content}}
    </section>
    <section class="striped-border block wide-block">
      <h1>Recent updates</h1>
      <ul>

      {% for post in site.posts %}
			   <li>
          <a href="{{ post.url }}">{{ post.title }}</a> <span class="date">{{ post.date | date: "%b %d, %Y" }}</span>
        </li>
      {% endfor %}

      </ul>

    </section>

    <img class="portrait" src="http://filipnest.com/files/green.jpg" />

    <section class="featured-projects">

      <h1 class="featured-projects striped-invert">Featured projects: </h1>

      {% for post in site.posts %}

        {% if post.featured %}

        <div class="striped-background filled-block">

          <div class="featured-content-info">

            <h1><a href="{{post.url}}">{{ post.title }}</a></h1>
            <div class="featured-description">
              {{post.description}}
            </div>

            {% for tag in post.tags %}

            <a class="tag" href="/tag/{{tag}}">{{tag}}</a>

            {% endfor %}

          </div>
        </div>

        {% endif %}

      {% endfor %}

    </section>
    {% include music.html %}
    </main>
  {% include footer.html %}