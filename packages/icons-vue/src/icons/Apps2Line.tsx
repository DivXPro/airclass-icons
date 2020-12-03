// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Apps2LineSvg from '@airclass/icons-svg/lib/asn/Apps2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Apps2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Apps2LineSvg}></AntdIcon>;
};

Apps2Line.displayName = 'Apps2Line';
Apps2Line.inheritAttrs = false;
export default Apps2Line;