{% include header.html %}
  <main>
  <img class="portrait-mobile" src="https://filipnest.com/green.jpg" />
    <h1 class="main-title">Hullo<span class="bullet">.</span></h1>
    <section class="striped-border block narrow-block">
      {{content}}
    </section>
    <section class="striped-border block wide-block">
      <h1 class="recent-updates">Recent updates</h1>
      <ul>

      {% for post in site.posts limit:7 %}
			   <li>
          <a href="{{ post.url }}">{{ post.title }}</a> <span class="date">{{ post.date | date: "%b %d, %Y" }}</span><br />
          <small style="font-size:0.5em">{{post.description}}</small>
        </li>
      {% endfor %}

      </ul>

    </section>

    <img class="portrait" src="https://filipnest.com/green.jpg" />

    <section class="featured-projects">

      <div class="featured-projects-list">

      <h1 class="featured-projects-title">Featured projects: </h1>

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

      </div>

    </section>

    </main>

    {% include music.html %}

  {% include footer.html %}
