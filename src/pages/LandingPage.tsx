import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const SteeringWheelIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm0 2c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"/>
  </svg>
);

const GraphIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
  </svg>
);

const SafetyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.83-3.4 9.16-7 10.29-3.6-1.13-7-5.46-7-10.29V6.3l7-3.12zm-2 12.11l-2.12-2.12-1.41 1.41L10.59 19l6.71-6.71-1.41-1.41L10 16.29z"/>
  </svg>
);

const LandingPage: React.FC = () => {
  const handleReservation = () => {
    window.open('https://forms.gle/qex4Mb8jmcRqUUFV9', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* 배경 그라데이션 */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1),transparent_70%)]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* 동적 이미지들 */}
        <div className="absolute inset-0 overflow-hidden">
          {/* 운전대 아이콘 */}
          <motion.div
            className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-primary/10 text-primary/50"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ translateX: 0 }}
          >
            <motion.div
              className="w-full h-full"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ translateX: 0 }}
            >
              <SteeringWheelIcon />
            </motion.div>
          </motion.div>

          {/* AI 그래프 아이콘 */}
          <motion.div
            className="absolute bottom-[20%] left-[5%] w-[200px] h-[200px] rounded-lg bg-primary/5 text-primary/50"
            animate={{
              y: [0, 20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ translateX: 0 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ translateX: 0 }}
            >
              <GraphIcon />
            </motion.div>
          </motion.div>

          {/* 안전 아이콘 */}
          <motion.div
            className="absolute top-[30%] left-[15%] w-[150px] h-[150px] rounded-full bg-success/10 text-success/50"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ translateX: 0 }}
          >
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ translateX: 0 }}
            >
              <SafetyIcon />
            </motion.div>
          </motion.div>

          {/* 데이터 흐름 효과 */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(45deg, transparent 45%, rgba(34,197,94,0.1) 50%, transparent 55%)',
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* 컨텐츠 */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="inline-block px-6 py-3 bg-primary/10 rounded-full text-primary text-sm mb-8 border border-primary/20"
            >
              사전예약 진행중
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-success bg-clip-text text-transparent"
            >
              닥터드라이브와 함께<br />
              새로운 카라이프를 시작하세요
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-xl text-gray-400 mb-12"
            >
              사전 예약하시는 분들께<br className="md:hidden" />
              특별한 혜택을 제공해드립니다
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button 
                onClick={handleReservation}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
              >
                사전예약 신청하기
              </button>
              <a 
                href="#service"
                className="w-full sm:w-auto px-8 py-4 border-2 border-primary/50 text-primary rounded-xl font-bold text-lg hover:bg-primary/10 transition-colors text-center"
              >
                서비스 소개 보기
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 문제인식 섹션 */}
      <section className="py-24 relative">
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05),transparent_70%)]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                운전 마스터를 위한 <br className="md:hidden" />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">닥터 드라이브</span>
              </h2>
            </div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-colors"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">운전 초보자를 위한 맞춤형 솔루션</h3>
                <p className="text-gray-400 leading-relaxed">
                  운전을 금방진 사고와 고령 운전자의 오작동 문제는 단순한 사고가 아니라, 도로 안전 전반에 걸친 중요한 이슈를 지니고 있습니다. 닥터드라이브는 이러한 문제를 실시간으로 해결할 수 있는 운전 보조 장치를 제공하여 운전자와 도로의 안전을 강화하는 데 목적이 있습니다.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gray-900/50 rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-colors"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">한국의 고령 운전자 현황</h3>
                <p className="text-gray-400 leading-relaxed">
                  한국의 고령 운전자 수는 매년 급증하고 있으며, 이로 인한 교통사고 비율도 지속적으로 증가하고 있습니다. 특히, 고령층 운전자의 사고 원인의 상당수가 브레이크와 엑셀레이터의 혼동에서 기인하며, 닥터드라이브는 실시간 알림 및 데이터 기록 기능을 통해 이러한 위험을 예방하고 운전자들에게 신뢰성 있는 안전 피드백을 제공합니다.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gray-900/50 rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-colors"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">기존의 AI 보조 시스템의 한계</h3>
                <p className="text-gray-400 leading-relaxed">
                  기존의 AI 보조 시스템은 사고 발생 시 데이터 분석만 가능하고, 실시간 예방이 불가능한 한계를 가지고 있습니다. 닥터드라이브는 실시간 데이터 수집과 알림 시스템을 통해 이러한 한계를 극복하고, 운전자들에게 즉각적인 안전 피드백을 제공하여 사고를 예방합니다.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 서비스 소개 섹션 */}
      <section id="service" className="py-24 relative">
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05),transparent_70%)]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                닥터드라이브 서비스
              </span>
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "실시간 모니터링",
                  description: "운전 중 실시간으로 운전자의 상태와 차량의 상태를 모니터링합니다."
                },
                {
                  title: "AI 기반 분석",
                  description: "수집된 데이터를 AI가 분석하여 사고 위험을 예측하고 예방합니다."
                },
                {
                  title: "맞춤형 피드백",
                  description: "운전자의 운전 패턴을 분석하여 개인화된 안전 피드백을 제공합니다."
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-900/50 rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-4 text-primary">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 사전예약 섹션 */}
      <section id="benefits" className="py-24 relative bg-gray-900/50">
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05),transparent_70%)]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-16"
            >
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                사전예약 혜택
              </span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "30% 할인",
                  description: "정식 출시 전 사전예약 고객님께 30% 특별 할인 혜택을 제공합니다."
                },
                {
                  title: "무상 A/S",
                  description: "1년간 무상 A/S와 함께 정기적인 소프트웨어 업데이트를 제공합니다."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-900/50 rounded-2xl p-8 border border-primary/20"
                >
                  <h3 className="text-2xl font-bold mb-4 text-primary">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={handleReservation}
              className="mt-12 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
            >
              지금 바로 사전예약하기
            </motion.button>
          </div>
        </div>
      </section>

      {/* 푸터 섹션 */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold text-white mb-4">닥터드라이브</h4>
                <p className="text-gray-400">안전한 운전의 시작</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-4">연락처</h4>
                <p className="text-gray-400">contact@doctordrive.com</p>
                <p className="text-gray-400">02-123-4567</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-4">주소</h4>
                <p className="text-gray-400">서울특별시 강남구 테헤란로</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>© 2024 닥터드라이브. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;