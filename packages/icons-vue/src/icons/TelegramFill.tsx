// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TelegramFillSvg from '@airclass/icons-svg/lib/asn/TelegramFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TelegramFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TelegramFillSvg}></AntdIcon>;
};

TelegramFill.displayName = 'TelegramFill';
TelegramFill.inheritAttrs = false;
export default TelegramFill;