"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FlowState, UserType, GoalType, ClassProduct, BTWProduct, DateSlot, Location } from "@/types";
import ProgressBar from "./ProgressBar";
import StepWho from "./StepWho";
import StepGoal from "./StepGoal";
import StepPickClass from "./StepPickClass";
import StepPickBTW from "./StepPickBTW";
import StepPickDate from "./StepPickDate";
import StepPickLocation from "./StepPickLocation";
import StepCheckout from "./StepCheckout";
import { ChevronLeft } from "lucide-react";

const initialState: FlowState = {
  step: 0,
  userType: null,
  goal: null,
  product: null,
  dateSlot: null,
  location: null,
};

const slideVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

export default function SelectionFlow() {
  const [state, setState] = useState<FlowState>(initialState);

  const goBack = useCallback(() => {
    setState((prev) => {
      if (prev.step === 0) return prev;
      // Reset the data for the step we're leaving
      const updates: Partial<FlowState> = { step: prev.step - 1 };
      if (prev.step === 1) updates.userType = null;
      if (prev.step === 2) updates.goal = null;
      if (prev.step === 3) {
        updates.product = null;
        updates.dateSlot = null;
        updates.location = null;
      }
      return { ...prev, ...updates };
    });
  }, []);

  const selectUserType = (type: UserType) =>
    setState((s) => ({ ...s, userType: type, step: 1 }));

  const selectGoal = (goal: GoalType) =>
    setState((s) => ({ ...s, goal, step: 2 }));

  const selectProduct = (product: ClassProduct | BTWProduct) =>
    setState((s) => ({ ...s, product, step: 3 }));

  const selectDate = (dateSlot: DateSlot) =>
    setState((s) => ({ ...s, dateSlot }));

  const selectLocation = (location: Location) =>
    setState((s) => ({ ...s, location }));

  const renderStep = () => {
    switch (state.step) {
      case 0:
        return <StepWho onSelect={selectUserType} />;
      case 1:
        return <StepGoal userType={state.userType!} onSelect={selectGoal} />;
      case 2:
        return state.goal === "class" ? (
          <StepPickClass userType={state.userType!} onSelect={selectProduct} />
        ) : (
          <StepPickBTW onSelect={selectProduct} />
        );
      case 3:
        if (state.goal === "class" && !state.dateSlot) {
          return <StepPickDate product={state.product!} onSelect={selectDate} />;
        }
        if (state.goal === "btw" && !state.location) {
          return <StepPickLocation onSelect={selectLocation} />;
        }
        return (
          <StepCheckout
            product={state.product!}
            dateSlot={state.dateSlot}
            location={state.location}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-[520px] bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-7 py-5 flex items-center justify-between">
        <span className="font-display text-white text-base">
          Defensive Driving School
        </span>
        {state.step > 0 && (
          <button
            onClick={goBack}
            className="flex items-center gap-1 text-white/60 hover:text-white/90 text-sm transition-colors"
          >
            <ChevronLeft size={16} /> Back
          </button>
        )}
      </div>

      {/* Progress bar */}
      <div className="px-7 pt-4 pb-2">
        <ProgressBar currentStep={state.step} totalSteps={4} />
      </div>

      {/* Animated step content */}
      <div className="px-7 pb-8 pt-4 max-h-[70vh] overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${state.step}-${state.dateSlot?.id}-${state.location?.slug}`}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}