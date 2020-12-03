// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QqFillSvg from '@airclass/icons-svg/lib/asn/QqFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QqFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QqFillSvg}></AntdIcon>;
};

QqFill.displayName = 'QqFill';
QqFill.inheritAttrs = false;
export default QqFill;