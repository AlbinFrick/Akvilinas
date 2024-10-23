import { Tooltip as TooltipPrimitive } from 'bits-ui';
import Content from './tooltip-content.svelte';

const Root = TooltipPrimitive.Root;
const Trigger = TooltipPrimitive.Trigger;

export {
  Content,
  Content as TooltipContent,
  Root,
  //
  Root as Tooltip,
  Trigger,
  Trigger as TooltipTrigger,
};
