// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ThunderstormsLineSvg from '@airclass/icons-svg/lib/asn/ThunderstormsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ThunderstormsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ThunderstormsLineSvg}></AntdIcon>;
};

ThunderstormsLine.displayName = 'ThunderstormsLine';
ThunderstormsLine.inheritAttrs = false;
export default ThunderstormsLine;