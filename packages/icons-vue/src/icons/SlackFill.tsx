// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SlackFillSvg from '@airclass/icons-svg/lib/asn/SlackFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SlackFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlackFillSvg}></AntdIcon>;
};

SlackFill.displayName = 'SlackFill';
SlackFill.inheritAttrs = false;
export default SlackFill;