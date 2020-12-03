// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlayFillSvg from '@airclass/icons-svg/lib/asn/PlayFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlayFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayFillSvg}></AntdIcon>;
};

PlayFill.displayName = 'PlayFill';
PlayFill.inheritAttrs = false;
export default PlayFill;