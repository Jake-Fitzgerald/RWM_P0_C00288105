

<!--- <script lang="ts"> 
  import { cubes } from '$lib/filters';
  let raw = '1 3 5 7 9 999';
  $: input = raw.trim().split(/\s+/).filter(Boolean).map(Number);
  $: output = cubes(input);
</script>
-->

<script lang="ts"> 
  import { combinedFilter } from '$lib/filters/combined/combined';
  import { collatzs } from '$lib/filters';

  const jake_numbers = "4 2 8 3 9 4 10";
  $: jake_input = jake_numbers.trim().split(/\s+/).filter(Boolean).map(Number);
  $: jake_output = collatzs(jake_input);

  const nathan_numbers = "4 2 8 3 9 4 10 5 11 6";
  $: nathan_input = nathan_numbers.trim().split(/\s+/).filter(Boolean).map(Number);
  $: nathan_output = combinedFilter(nathan_input);
</script>



<h2>Combined</h2>
<p>{"Jake's Test: " + jake_output.join(" ")}</p>
<p>{"Nathan's Test: " + nathan_output.join(" ")}</p>


