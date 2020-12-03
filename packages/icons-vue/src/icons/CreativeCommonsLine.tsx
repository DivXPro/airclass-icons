// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CreativeCommonsLineSvg from '@airclass/icons-svg/lib/asn/CreativeCommonsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CreativeCommonsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CreativeCommonsLineSvg}></AntdIcon>;
};

CreativeCommonsLine.displayName = 'CreativeCommonsLine';
CreativeCommonsLine.inheritAttrs = false;
export default CreativeCommonsLine;