// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import KakaoTalkFillSvg from '@airclass/icons-svg/lib/asn/KakaoTalkFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KakaoTalkFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KakaoTalkFillSvg}></AntdIcon>;
};

KakaoTalkFill.displayName = 'KakaoTalkFill';
KakaoTalkFill.inheritAttrs = false;
export default KakaoTalkFill;