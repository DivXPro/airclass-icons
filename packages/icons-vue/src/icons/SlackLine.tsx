// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SlackLineSvg from '@airclass/icons-svg/lib/asn/SlackLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SlackLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlackLineSvg}></AntdIcon>;
};

SlackLine.displayName = 'SlackLine';
SlackLine.inheritAttrs = false;
export default SlackLine;