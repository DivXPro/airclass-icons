// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import KakaoTalkLineSvg from '@airclass/icons-svg/lib/asn/KakaoTalkLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KakaoTalkLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KakaoTalkLineSvg}></AntdIcon>;
};

KakaoTalkLine.displayName = 'KakaoTalkLine';
KakaoTalkLine.inheritAttrs = false;
export default KakaoTalkLine;