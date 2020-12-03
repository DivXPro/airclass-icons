// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MarkupFillSvg from '@airclass/icons-svg/lib/asn/MarkupFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MarkupFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MarkupFillSvg}></AntdIcon>;
};

MarkupFill.displayName = 'MarkupFill';
MarkupFill.inheritAttrs = false;
export default MarkupFill;