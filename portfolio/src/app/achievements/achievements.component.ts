import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  embeddedTweet: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit(): void {
    // Replace this with the actual Twitter embed code you provided
    const twitterEmbedCode = `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Last year, we launched the DII contest, which received an overwhelming participation
                of 12,000+ entries! After the multiple stages, we are excited to announce the winners. Congratulations
                to you all! Here&#39;s to building a generation of tech-designers from India.<a
                    href="https://twitter.com/hashtag/ProudlyIndian?src=hash&amp;ref_src=twsrc%5Etfw">#ProudlyIndian</a>
                <a href="https://t.co/lNeA98A07J">pic.twitter.com/lNeA98A07J</a></p>&mdash; Lava Mobiles (&#64;LavaMobile)
            <a href="https://twitter.com/LavaMobile/status/1397901021125373952?ref_src=twsrc%5Etfw">May 27, 2021</a>
        </blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
    this.embeddedTweet = this.sanitizer.bypassSecurityTrustHtml(twitterEmbedCode);
  }
}
