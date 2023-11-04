<?xml version="1.0" encoding="utf-8"?>

<feed xmlns="http://www.w3.org/2005/Atom" {% if site.lang %}xml:lang="{{ site.lang }}"{% endif %}>

  {% assign posts = site.posts | sort: "date" | reverse %}
  {% for post in posts %}
    <entry>
      {% assign post_title = post.title | smartify | strip_html | normalize_whitespace | xml_escape %}

      <title type="html">{{ post_title }}</title>
      <published>{{ post.date | date_to_xmlschema }}</published>
      <updated>{{ post.last_modified_at | default: post.date | date_to_xmlschema }}</updated>

        <tags>{{post.tags|join:','}}</tags>

      <content>{{ post.content | strip | xml_escape }}</content>

      {% if post.description and post.description != empty %}
      <summary type="html">{{ post.description | strip_html | normalize_whitespace | xml_escape }}</summary>
      {% else %}
      <summary type="html">{{ post.excerpt | strip_html | normalize_whitespace | xml_escape }}</summary>
      {% endif %}

      {% assign post_image = post.image.path | default: post.image %}
      {% if post_image %}
        {% unless post_image contains "://" %}
          {% assign post_image = post_image | absolute_url %}
        {% endunless %}
        <media>{{ post_image | xml_escape }}</media>
      {% endif %}
    </entry>
  {% endfor %}
</feed>
