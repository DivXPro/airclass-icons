// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WhatsappLineSvg from '@airclass/icons-svg/lib/asn/WhatsappLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WhatsappLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WhatsappLineSvg}></AntdIcon>;
};

WhatsappLine.displayName = 'WhatsappLine';
WhatsappLine.inheritAttrs = false;
export default WhatsappLine;