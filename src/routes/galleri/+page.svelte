<script>
  import { getSanityImageURL } from '$lib/sanity';

  
  /**
   * @typedef {Object} Props
   * @property {import('./$types').PageData} data
   */

  /** @type {Props} */
  let { data } = $props();
</script>

<div
  class="not-prose mx-auto my-4 flex max-w-default-content flex-col gap-4 px-4 md:my-12 lg:gap-9"
>
  {#each data.gallery as gallery}
    <div class="flex flex-col gap-4 lg:flex-row lg:gap-9">
      <div class="flex flex-1 flex-col-reverse gap-4 lg:flex-col lg:gap-9">
        <div class="flex gap-4 lg:gap-9">
          <div class="h-72 w-full overflow-hidden rounded-xl lg:h-[450px]">
            <img
              class="h-full w-full object-cover"
              src={getSanityImageURL(gallery.portraitImageLeft).height(450).width(288).url()}
              alt="images"
            />
          </div>
          <div class="h-72 w-full overflow-hidden rounded-xl lg:h-[450px]">
            <img
              class="h-full w-full object-cover"
              src={getSanityImageURL(gallery.portraitImageRight).height(450).width(288).url()}
              alt="images"
            />
          </div>
        </div>
        <div class="h-72 w-full overflow-hidden rounded-xl lg:h-[622px]">
          <img
            class="h-full w-full object-cover"
            src={getSanityImageURL(gallery.squareImage).height(622).width(622).url()}
            alt="images"
          />
        </div>
      </div>
      <div class="flex flex-1 flex-col gap-4 lg:gap-9">
        <div class="h-96 w-full overflow-hidden rounded-xl lg:h-[764px]">
          <img
            class="h-full w-full object-cover"
            src={getSanityImageURL(gallery.bigPortraitImage).height(622).width(764).url()}
            alt="images"
          />
        </div>

        <div class="h-52 w-full overflow-hidden rounded-xl lg:h-[308px]">
          <img
            class="h-full w-full object-cover"
            src={getSanityImageURL(gallery.landscapeImage).width(622).height(308).url()}
            alt="images"
          />
        </div>
      </div>
    </div>
  {/each}
</div>
