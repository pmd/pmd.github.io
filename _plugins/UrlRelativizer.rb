#
# See https://github.com/jekyll/jekyll/issues/6360#issuecomment-329275101
#
# Usage:
# {{ "/css/style.css" | relativize_url }} will generate
# "css/style.css" for pages in the root, and "../css/style.css"
# for pages in immediate subdirectories.
#

require 'pathname'

module Jekyll
  module UrlRelativizer
    def relativize_url(url)
      pageUrl = @context.registers[:page]["url"]
      pageDir = Pathname(pageUrl) #.parent
      #warn "relativize url=#{url} for pageurl=#{pageUrl} pagedir=#{pageDir}\n"
      Pathname(url).relative_path_from(pageDir).to_s
    end
  end
end

Liquid::Template.register_filter(Jekyll::UrlRelativizer)
